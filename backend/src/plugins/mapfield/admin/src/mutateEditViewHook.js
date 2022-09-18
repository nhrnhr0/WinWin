const mutateLayout = layout => layout.map(row => {
    const mutatedRow = row.reduce((acc, field) => {
        const hasMapFieldEnabled = field.fieldSchema.pluginOptions?.['mapfield']?.enabled;
        if(!hasMapFieldEnabled) {
            return [...acc, field];
        }else {
            return [...acc, {
                ...field,
                fieldSchema: {
                    ...field.fieldSchema,
                    type: 'mapfield'
                }
            }]; 
        }
    }, []);
    return mutatedRow;
})

const mutateEditViewHook = ({layout, query}) => {
    const mutatedEditLayout = mutateLayout(layout.contentType.layouts.edit)
    const enhanchedLayouts = {
        ...layout.contentType.layouts,
        edit: mutatedEditLayout
    }
    return {
        query,
        layout: {
            ...layout,
            contentType: {
                ...layout.contentType,
                layouts: enhanchedLayouts
            },
        },
    }
}

export default mutateEditViewHook;