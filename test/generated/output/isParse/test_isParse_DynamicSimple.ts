import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_isParse_DynamicSimple = _test_isParse(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) =>
        ((input: any): typia.Primitive<DynamicSimple> => {
            const is = (input: any): input is DynamicSimple => {
                const $join = (typia.isParse as any).join;
                const $io0 = (input: any): boolean =>
                    Object.keys(input).every((key) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                "number" === typeof value &&
                                Number.isFinite(value)
                            );
                        return true;
                    });
                return (
                    "object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input) &&
                    $io0(input)
                );
            };
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        })(input),
    DynamicSimple.SPOILERS,
);
