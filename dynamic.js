import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

export default function DynamicSelect(props) {
    const options = props.dataOptions;
    const dataForeignId = props.dataForeignId;
    const dataRelationKey = props.dataRelationKey;
    const label = props.dataLabel;
    const dataName = props.dataName;
    const setData = props.setData;
    const dataValueName = props.dataValueName;
    const error = props.error;
    const menuProps = {
        PaperProps: {
            style: {
                maxHeight: 48 * 4.5 + 8,
                width: 250,
            },
        },
    };

    function relatedOptions() {
        if (!dataForeignId) {
            return options.map((option) => {
                return (
                    <MenuItem key={option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                );
            });
        } else {
            let childrenData = options.filter(
                (option) => option[dataForeignId] == dataRelationKey
            );

            return childrenData.map((option) => {
                return (
                    <MenuItem key={option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                );
            });
        }
    }
    return (
        <FormControl
            sx={{
                width: "100%",
                marginTop: 2,
            }}
            fullWidth
            error={error}
            >
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-select-small"
                value={dataName}
                label={label}
                helperText={error}
                id="demo-select-small"
                menuProps={menuProps}
                size="small"
                onChange={(e) => setData(dataValueName, e.target.value)}
            >
                <MenuItem value="-">
                    <em>-</em>
                </MenuItem>
                {relatedOptions()}
            </Select>
            <FormHelperText>{error}</FormHelperText>
        </FormControl>
    );
}
