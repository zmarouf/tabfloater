export const CompanionName = "io.github.tabfloater.companion";

export const CompanionLatestVersions = {
    Linux: "0.5.0",
    Windows: "0.5.0"
};

export const CommandToPositionMapping = {
    "topLeft,moveDown": "bottomLeft",
    "topLeft,moveRight": "topRight",
    "bottomLeft,moveUp": "topLeft",
    "bottomLeft,moveRight": "bottomRight",
    "topRight,moveLeft": "topLeft",
    "topRight,moveDown": "bottomRight",
    "bottomRight,moveUp": "topRight",
    "bottomRight,moveLeft": "bottomLeft",
};

// TODO finalise these options
export const DefaultOptions = {
    positioningStrategy: "smart",
    fixedPosition: "topRight",
    fixedTabSize: "standard",
    viewportTopOffset: 150,
    smartPositioningFollowTabSwitches: true,
    smartPositioningRestrictMaxFloatingTabSize: true,
    debug: true
};

export const FloatingTabPadding = 50;
export const MinimumFloatingTabSideLength = 300;
