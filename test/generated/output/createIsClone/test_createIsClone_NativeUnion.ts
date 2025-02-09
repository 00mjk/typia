import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_createIsClone_NativeUnion = _test_isClone(
    "NativeUnion",
    NativeUnion.generate,
    (input: any): typia.Primitive<NativeUnion> | null => {
        const is = (input: any): input is NativeUnion => {
            const $io0 = (input: any): boolean =>
                (null === input.date || input.date instanceof Date) &&
                (input.unsigned instanceof Uint8Array ||
                    input.unsigned instanceof Uint8ClampedArray ||
                    input.unsigned instanceof Uint16Array ||
                    input.unsigned instanceof Uint32Array ||
                    input.unsigned instanceof BigUint64Array) &&
                (input.signed instanceof Int8Array ||
                    input.signed instanceof Int16Array ||
                    input.signed instanceof Int32Array ||
                    input.signed instanceof BigInt64Array) &&
                (input.float instanceof Float32Array ||
                    input.float instanceof Float64Array) &&
                (input.buffer instanceof ArrayBuffer ||
                    input.buffer instanceof SharedArrayBuffer ||
                    input.buffer instanceof DataView ||
                    input.buffer instanceof Buffer) &&
                (input.weak instanceof WeakSet ||
                    input.weak instanceof WeakMap);
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const clone = (input: NativeUnion): typia.Primitive<NativeUnion> => {
            const $io1 = (input: any): boolean =>
                "Buffer" === input.type &&
                Array.isArray(input.data) &&
                input.data.every((elem: any) => "number" === typeof elem);
            const $co0 = (input: any): any => ({
                date:
                    "object" === typeof input.date &&
                    null !== input.date &&
                    "function" === typeof input.date.toJSON
                        ? (input.date.toJSON() as any)
                        : (input.date as any),
                unsigned:
                    input.unsigned instanceof Uint8Array
                        ? {}
                        : input.unsigned instanceof Uint8ClampedArray
                        ? {}
                        : input.unsigned instanceof Uint16Array
                        ? {}
                        : input.unsigned instanceof Uint32Array
                        ? {}
                        : input.unsigned instanceof BigUint64Array
                        ? {}
                        : (input.unsigned as any),
                signed:
                    input.signed instanceof Int8Array
                        ? {}
                        : input.signed instanceof Int16Array
                        ? {}
                        : input.signed instanceof Int32Array
                        ? {}
                        : input.signed instanceof BigInt64Array
                        ? {}
                        : (input.signed as any),
                float:
                    input.float instanceof Float32Array
                        ? {}
                        : input.float instanceof Float64Array
                        ? {}
                        : (input.float as any),
                buffer:
                    "object" === typeof input.buffer &&
                    null !== input.buffer &&
                    "function" === typeof input.buffer.toJSON
                        ? (input.buffer.toJSON() as any)
                        : input.buffer instanceof ArrayBuffer
                        ? {}
                        : input.buffer instanceof SharedArrayBuffer
                        ? {}
                        : input.buffer instanceof DataView
                        ? {}
                        : "object" === typeof input.buffer &&
                          null !== input.buffer
                        ? $co1(input.buffer)
                        : (input.buffer as any),
                weak:
                    input.weak instanceof WeakSet
                        ? {}
                        : input.weak instanceof WeakMap
                        ? {}
                        : (input.weak as any),
            });
            const $co1 = (input: any): any => ({
                type: input.type as any,
                data: Array.isArray(input.data)
                    ? input.data.map((elem: any) => elem as any)
                    : (input.data as any),
            });
            return Array.isArray(input)
                ? input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co0(elem)
                          : (elem as any),
                  )
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
    NativeUnion.SPOILERS,
);
