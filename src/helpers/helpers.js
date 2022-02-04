export function instanceOf(instance, instanceConstructor) {
    const proto = instance.__proto__;

    if (proto === null) {
        return false;
    } else {
        return proto.constructor === instanceConstructor ? true : instanceOf(proto, instanceConstructor);
    }
}
