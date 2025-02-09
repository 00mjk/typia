import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagArray } from "../../structures/TagArray";

export const test_validate_TagArray = _test_validate(
    "TagArray",
    TagArray.generate,
    (input) => typia.validate(input),
    TagArray.SPOILERS,
);
