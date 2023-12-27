import { join } from "lodash-es";

export function test() {
    return fetch(join(["http://google.com"]));
}


export function hello() {
    return join(['hello', 'world'], ' ');
}