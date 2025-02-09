import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { TagFormat } from "../../../structures/TagFormat";

export const test_createIsClone_TagFormat = _test_isClone(
    "TagFormat",
    TagFormat.generate,
    (input: any): typia.Primitive<TagFormat> | null => {
        const is = (input: any): input is TagFormat => {
            const $is_uuid = (typia.createIsClone as any).is_uuid;
            const $is_email = (typia.createIsClone as any).is_email;
            const $is_url = (typia.createIsClone as any).is_url;
            const $is_ipv4 = (typia.createIsClone as any).is_ipv4;
            const $is_ipv6 = (typia.createIsClone as any).is_ipv6;
            const $io0 = (input: any): boolean =>
                "string" === typeof input.uuid &&
                true === $is_uuid(input.uuid) &&
                "string" === typeof input.email &&
                true === $is_email(input.email) &&
                "string" === typeof input.url &&
                true === $is_url(input.url) &&
                "string" === typeof input.ipv4 &&
                true === $is_ipv4(input.ipv4) &&
                "string" === typeof input.ipv6 &&
                true === $is_ipv6(input.ipv6) &&
                "string" === typeof input.custom;
            return "object" === typeof input && null !== input && $io0(input);
        };
        const clone = (input: TagFormat): typia.Primitive<TagFormat> => {
            const $is_uuid = (typia.createIsClone as any).is_uuid;
            const $is_email = (typia.createIsClone as any).is_email;
            const $is_url = (typia.createIsClone as any).is_url;
            const $is_ipv4 = (typia.createIsClone as any).is_ipv4;
            const $is_ipv6 = (typia.createIsClone as any).is_ipv6;
            const $co0 = (input: any): any => ({
                uuid: input.uuid as any,
                email: input.email as any,
                url: input.url as any,
                ipv4: input.ipv4 as any,
                ipv6: input.ipv6 as any,
                custom: input.custom as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
    TagFormat.SPOILERS,
);
