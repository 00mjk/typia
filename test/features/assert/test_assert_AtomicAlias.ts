import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_assert_AtomicAlias = _test_assert(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => typia.assert(input),
    AtomicAlias.SPOILERS,
);
