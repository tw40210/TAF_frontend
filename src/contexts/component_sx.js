export let GetTagsStyleObj = (colors) => {
    console.log("colors",colors)
    return(
        {
            '& .MuiTab-root': { color: colors.grey[400] }, // Default color for tabs
            '& .MuiTab-root.Mui-selected': { color: colors.greenAccent[400] }, // Color for the selected tab
            '& .MuiTabs-indicator': { backgroundColor : colors.greenAccent[400] }, // Indicator color
          }
    )
}
