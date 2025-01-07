    for (let field of inputFields) {
        fields.push(field === '*' ? null : replacePathInField(field));
    }
    