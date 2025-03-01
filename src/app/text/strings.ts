export function strings(
    value: string,
    options: {
        toUpper?: boolean;
        toLower?: boolean;
        reverse?: boolean;
        gap?: boolean;
        tag?: boolean;
        commaToTag?: boolean;
        tagToComma?: boolean;
        joinWordsForTag?: boolean;
        count?: boolean;
    }
): string | number {
    if (!value.trim()) {
        return "No input provided.";
    }

    let result = value;

    if (options.gap) {
        result = result.replace(/\s+/g, "");
    }
    if (options.toUpper) {
        result = result.toUpperCase();
    }
    if (options.toLower) {
        result = result.toLowerCase();
    }
    if (options.reverse) {
        result = result.split("").reverse().join("");
    }
    if (options.tag) {
        result = `#${result.replace(/\s+/g, "")}`;
    }
    if (options.commaToTag) {
        result = `#${result.replace(/,/g, "").replace(/\s+/g, " #")}`;
    }
    if (options.joinWordsForTag) {
        result = `#${result.replace(/,/g, "").replace(/\s+/g, "")}`;
    }
    if (options.tagToComma) {
        result = result.replace(/#/g, "").replace(/\s+/g, ", ");
    }
    if (options.count) {
        return result.length;
    }

    return result;
}
