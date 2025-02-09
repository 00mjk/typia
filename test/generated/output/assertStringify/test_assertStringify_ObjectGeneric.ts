import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_assertStringify_ObjectGeneric = _test_assertStringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) =>
        ((input: any): string => {
            const assert = (
                input: any,
            ): [
                ObjectGeneric.ISomething<boolean>,
                ObjectGeneric.ISomething<number>,
                ObjectGeneric.ISomething<string>,
            ] => {
                const $guard = (typia.assertStringify as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is [
                    ObjectGeneric.ISomething<boolean>,
                    ObjectGeneric.ISomething<number>,
                    ObjectGeneric.ISomething<string>,
                ] => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("boolean" === typeof input.value ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "boolean",
                                value: input.value,
                            })) &&
                        (("object" === typeof input.child &&
                            null !== input.child) ||
                            $guard(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<boolean, boolean>>",
                                value: input.child,
                            })) &&
                        $ao1(
                            input.child,
                            _path + ".child",
                            true && _exceptionable,
                        ) &&
                        (Array.isArray(input.elements) ||
                            $guard(_exceptionable, {
                                path: _path + ".elements",
                                expected:
                                    "Array<Resolve<ObjectGeneric.IChild<boolean, boolean>>>",
                                value: input.elements,
                            })) &&
                        input.elements.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".elements[" +
                                            _index1 +
                                            "]",
                                        expected:
                                            "Resolve<ObjectGeneric.IChild<boolean, boolean>>",
                                        value: elem,
                                    })) &&
                                $ao1(
                                    elem,
                                    _path + ".elements[" + _index1 + "]",
                                    true && _exceptionable,
                                ),
                        );
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("boolean" === typeof input.child_value ||
                            $guard(_exceptionable, {
                                path: _path + ".child_value",
                                expected: "boolean",
                                value: input.child_value,
                            })) &&
                        ("boolean" === typeof input.child_next ||
                            $guard(_exceptionable, {
                                path: _path + ".child_next",
                                expected: "boolean",
                                value: input.child_next,
                            }));
                    const $ao2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            })) &&
                        (("object" === typeof input.child &&
                            null !== input.child) ||
                            $guard(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<number, number>>",
                                value: input.child,
                            })) &&
                        $ao3(
                            input.child,
                            _path + ".child",
                            true && _exceptionable,
                        ) &&
                        (Array.isArray(input.elements) ||
                            $guard(_exceptionable, {
                                path: _path + ".elements",
                                expected:
                                    "Array<Resolve<ObjectGeneric.IChild<number, number>>>",
                                value: input.elements,
                            })) &&
                        input.elements.every(
                            (elem: any, _index2: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".elements[" +
                                            _index2 +
                                            "]",
                                        expected:
                                            "Resolve<ObjectGeneric.IChild<number, number>>",
                                        value: elem,
                                    })) &&
                                $ao3(
                                    elem,
                                    _path + ".elements[" + _index2 + "]",
                                    true && _exceptionable,
                                ),
                        );
                    const $ao3 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.child_value &&
                            Number.isFinite(input.child_value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".child_value",
                                expected: "number",
                                value: input.child_value,
                            })) &&
                        (("number" === typeof input.child_next &&
                            Number.isFinite(input.child_next)) ||
                            $guard(_exceptionable, {
                                path: _path + ".child_next",
                                expected: "number",
                                value: input.child_next,
                            }));
                    const $ao4 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.value ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "string",
                                value: input.value,
                            })) &&
                        (("object" === typeof input.child &&
                            null !== input.child) ||
                            $guard(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<string, string>>",
                                value: input.child,
                            })) &&
                        $ao5(
                            input.child,
                            _path + ".child",
                            true && _exceptionable,
                        ) &&
                        (Array.isArray(input.elements) ||
                            $guard(_exceptionable, {
                                path: _path + ".elements",
                                expected:
                                    "Array<Resolve<ObjectGeneric.IChild<string, string>>>",
                                value: input.elements,
                            })) &&
                        input.elements.every(
                            (elem: any, _index3: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".elements[" +
                                            _index3 +
                                            "]",
                                        expected:
                                            "Resolve<ObjectGeneric.IChild<string, string>>",
                                        value: elem,
                                    })) &&
                                $ao5(
                                    elem,
                                    _path + ".elements[" + _index3 + "]",
                                    true && _exceptionable,
                                ),
                        );
                    const $ao5 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.child_value ||
                            $guard(_exceptionable, {
                                path: _path + ".child_value",
                                expected: "string",
                                value: input.child_value,
                            })) &&
                        ("string" === typeof input.child_next ||
                            $guard(_exceptionable, {
                                path: _path + ".child_next",
                                expected: "string",
                                value: input.child_next,
                            }));
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ObjectGeneric.ISomething<boolean>>, Resolve<ObjectGeneric.ISomething<number>>, Resolve<ObjectGeneric.ISomething<string>>]",
                                value: input,
                            })) &&
                        (input.length === 3 ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ObjectGeneric.ISomething<boolean>>, Resolve<ObjectGeneric.ISomething<number>>, Resolve<ObjectGeneric.ISomething<string>>]",
                                value: input,
                            })) &&
                        (("object" === typeof input[0] && null !== input[0]) ||
                            $guard(true, {
                                path: _path + "[0]",
                                expected:
                                    "Resolve<ObjectGeneric.ISomething<boolean>>",
                                value: input[0],
                            })) &&
                        $ao0(input[0], _path + "[0]", true) &&
                        (("object" === typeof input[1] && null !== input[1]) ||
                            $guard(true, {
                                path: _path + "[1]",
                                expected:
                                    "Resolve<ObjectGeneric.ISomething<number>>",
                                value: input[1],
                            })) &&
                        $ao2(input[1], _path + "[1]", true) &&
                        (("object" === typeof input[2] && null !== input[2]) ||
                            $guard(true, {
                                path: _path + "[2]",
                                expected:
                                    "Resolve<ObjectGeneric.ISomething<string>>",
                                value: input[2],
                            })) &&
                        $ao4(input[2], _path + "[2]", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (
                input: [
                    ObjectGeneric.ISomething<boolean>,
                    ObjectGeneric.ISomething<number>,
                    ObjectGeneric.ISomething<string>,
                ],
            ): string => {
                const $number = (typia.assertStringify as any).number;
                const $string = (typia.assertStringify as any).string;
                const $io1 = (input: any): boolean =>
                    "boolean" === typeof input.child_value &&
                    "boolean" === typeof input.child_next;
                const $io3 = (input: any): boolean =>
                    "number" === typeof input.child_value &&
                    "number" === typeof input.child_next;
                const $io5 = (input: any): boolean =>
                    "string" === typeof input.child_value &&
                    "string" === typeof input.child_next;
                const $so0 = (input: any): any =>
                    `{"value":${
                        input.value
                    },"child":${`{"child_value":${input.child.child_value},"child_next":${input.child.child_next}}`},"elements":${`[${input.elements
                        .map(
                            (elem: any) =>
                                `{"child_value":${elem.child_value},"child_next":${elem.child_next}}`,
                        )
                        .join(",")}]`}}`;
                const $so2 = (input: any): any =>
                    `{"value":${$number(
                        input.value,
                    )},"child":${`{"child_value":${$number(
                        input.child.child_value,
                    )},"child_next":${$number(
                        input.child.child_next,
                    )}}`},"elements":${`[${input.elements
                        .map(
                            (elem: any) =>
                                `{"child_value":${$number(
                                    elem.child_value,
                                )},"child_next":${$number(elem.child_next)}}`,
                        )
                        .join(",")}]`}}`;
                const $so4 = (input: any): any =>
                    `{"value":${$string(
                        input.value,
                    )},"child":${`{"child_value":${$string(
                        input.child.child_value,
                    )},"child_next":${$string(
                        input.child.child_next,
                    )}}`},"elements":${`[${input.elements
                        .map(
                            (elem: any) =>
                                `{"child_value":${$string(
                                    elem.child_value,
                                )},"child_next":${$string(elem.child_next)}}`,
                        )
                        .join(",")}]`}}`;
                return `[${$so0(input[0])},${$so2(input[1])},${$so4(
                    input[2],
                )}]`;
            };
            return stringify(assert(input));
        })(input),
    ObjectGeneric.SPOILERS,
);
