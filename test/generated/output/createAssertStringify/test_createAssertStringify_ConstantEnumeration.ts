import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_createAssertStringify_ConstantEnumeration =
    _test_assertStringify(
        "ConstantEnumeration",
        ConstantEnumeration.generate,
        (input: any): string => {
            const assert = (input: any): ConstantEnumeration => {
                const $guard = (typia.createAssertStringify as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ConstantEnumeration => {
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    'Array<("Four" | "Three" | 0 | 1 | 2)>',
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                0 === elem ||
                                1 === elem ||
                                2 === elem ||
                                "Three" === elem ||
                                "Four" === elem ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: '("Four" | "Three" | 0 | 1 | 2)',
                                    value: elem,
                                }),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (input: ConstantEnumeration): string => {
                const $string = (typia.createAssertStringify as any).string;
                const $number = (typia.createAssertStringify as any).number;
                const $throws = (typia.createAssertStringify as any).throws;
                return `[${input
                    .map((elem: any) =>
                        (() => {
                            if ("string" === typeof elem) return $string(elem);
                            if ("number" === typeof elem) return $number(elem);
                            if ("string" === typeof elem)
                                return '"' + elem + '"';
                            $throws({
                                expected: '("Four" | "Three" | 0 | 1 | 2)',
                                value: elem,
                            });
                        })(),
                    )
                    .join(",")}]`;
            };
            return stringify(assert(input));
        },
        ConstantEnumeration.SPOILERS,
    );
