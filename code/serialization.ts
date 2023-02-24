export const roles: (roles: Set<ConcreteRole>) => string = roles =>
    "<roles>\n" +
        Array.from(roles).map(r =>
            `<role id="role_${r.name}" ${r.min === 0 ? "" : `min="${r.min}"`} ${
                r.max === Number.MAX_VALUE ? "" : `max="${r.max}"`
            }/>`).join("\n") +
    "</roles>"