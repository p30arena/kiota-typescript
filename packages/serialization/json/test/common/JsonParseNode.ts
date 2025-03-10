import { assert } from "chai";

import { JsonParseNode } from "../../src/index";
import {
  createTestParserFromDiscriminatorValue,
  type TestBackedModel,
  createTestBackedModelFromDiscriminatorValue,
  type TestParser 
} from "./testEntity";

describe("JsonParseNode", () => {
  it("jsonParseNode:initializes", async () => {
    const jsonParseNode = new JsonParseNode(null);
    assert.isDefined(jsonParseNode);
  });

  it("Test object creation", async () => {
    const result = new JsonParseNode(null).getObjectValue(
      createTestParserFromDiscriminatorValue
    );
    assert.isDefined(result);

    const stringValueResult = new JsonParseNode({
      testCollection: ["2", "3"],
      testString: "test",
      additionalProperty: "addnProp",
    }).getObjectValue(createTestParserFromDiscriminatorValue) as TestParser;
    assert.equal(stringValueResult.testCollection?.length, 2);
    assert.equal(stringValueResult.testCollection?.shift(), "2");
  });

  it("Test date value hydration", async () => {
    const dateStr = "2023-08-31T00:00:00Z";
    const jsDate = new Date(dateStr);

    const stringValueResult = new JsonParseNode({
      testDate: dateStr
    }).getObjectValue(createTestParserFromDiscriminatorValue) as TestParser;

    assert.equal(stringValueResult.testDate?.getTime(), jsDate.getTime());
  });

  it("Test undefined dates staying as undefined", async () => {
    const stringValueResult = new JsonParseNode({
      testDate: undefined
    }).getObjectValue(createTestParserFromDiscriminatorValue) as TestParser;

    assert.equal(stringValueResult.testDate, undefined);

  });

  it("Test enum values", async () => {
    const TestEnumObject = {
      A: "a",
      B: "b",
      C: "c"
    } as const;

    type TestEnum = (typeof TestEnumObject)[keyof typeof TestEnumObject];

    const result = new JsonParseNode([
      "a",
      "b",
      "c"
    ]).getCollectionOfEnumValues(TestEnumObject) as TestEnum[];
    assert.equal(result.length, 3);
    assert.equal(result.shift(), "a");

    const enumValuesResult = new JsonParseNode([
      "d",
      "b",
      "c"
    ]).getCollectionOfEnumValues(TestEnumObject) as TestEnum[];
    assert.equal(enumValuesResult.length, 2);
    assert.equal(enumValuesResult.shift(), "b")

    const enumValueResult = new JsonParseNode(
      "a"
    ).getEnumValue(TestEnumObject) as TestEnum;
    assert.equal(enumValueResult, TestEnumObject.A);
  });

  it("Test a null collection of object values", async () => {
    const result = new JsonParseNode({
      "foos": [
          {
            "id": "b089d1f1-e527-4b8a-ba96-094922af6e40",
            "bars": null
          }
      ]
    }).getObjectValue(createTestParserFromDiscriminatorValue) as TestParser;
    assert.equal(result.foos![0].bars, undefined);
  });

  it("Test collection of object values", async () => {
    const result = new JsonParseNode({
      "foos": [
          {
            "id": "b089d1f1-e527-4b8a-ba96-094922af6e40",
            "bars": [
              {
                "propA": "property A test value",
                "propB": "property B test value",
                "propC": null
              }
            ]
          }
      ]
    }).getObjectValue(createTestParserFromDiscriminatorValue) as TestParser;
    assert.equal(result.foos![0].bars![0].propA, "property A test value");
  });

  it("Test collection of backed object values", async () => {
    const result = new JsonParseNode({
      "foos": [
          {
            "id": "b089d1f1-e527-4b8a-ba96-094922af6e40",
            "bars": [
              {
                "propA": "property A test value",
                "propB": "property B test value",
                "propC": null
              }
            ]
          }
      ]
    }).getObjectValue(createTestBackedModelFromDiscriminatorValue) as TestBackedModel;
    assert.equal(result.foos![0].bars![0].propA, "property A test value");
    const backingStore = result.backingStore;
    result.testString = "test";
    assert.equal(backingStore?.get("testString"), "test");
  });

  it("backing store shouldn't interfere with JSON.stringify", async () => {

    const jsonObject = {
      "foos": [
          {
            "id": "b089d1f1-e527-4b8a-ba96-094922af6e40",
            "bars": [
              {
                "propA": "property A test value",
                "propB": "property B test value"
              }
            ]
          }
      ]
    };

    const result = new JsonParseNode(jsonObject).getObjectValue(createTestBackedModelFromDiscriminatorValue) as TestBackedModel;
    assert.equal(result.foos![0].bars![0].propA, "property A test value");
    let jsonObjectStr = JSON.stringify(jsonObject);
    let resultStr = JSON.stringify(result);
    assert.equal(jsonObjectStr, resultStr);

    // update the object then check stringify again
    result.testString = "testStringValue";
    jsonObjectStr = JSON.stringify(jsonObject);
    resultStr = JSON.stringify(result);
    assert.notEqual(jsonObjectStr, resultStr);

    // update the backing store and check stringify again
    const updateTestStrValue = "test string value";
    const backingStore = result.backingStore;
    backingStore?.set("testString", updateTestStrValue);
    const updatedJsonObject = {...jsonObject, testString: updateTestStrValue};
    jsonObjectStr = JSON.stringify(updatedJsonObject);
    resultStr = JSON.stringify(result);
    assert.equal(jsonObjectStr, resultStr);
  });

});
