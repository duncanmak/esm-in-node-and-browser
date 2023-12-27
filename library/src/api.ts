import { join } from "lodash-es";

export function test() {
    return fetch(join(["http://google.com"]));
}