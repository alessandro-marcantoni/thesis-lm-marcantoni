const role: (element: XMLElement) => Role = element =>
    new ConcreteRole(
        element.attributes["id"],
        roleTopography
            .find(rt => rt.name === element.attributes["id"])
            .map((rt: Role) => rt.extends).getOrElse(undefined),
        option(parseInt(element.attributes["min"])).getOrElse(0),
        option(parseInt(element.attributes["max"]))
            .getOrElse(Number.MAX_VALUE)
    )