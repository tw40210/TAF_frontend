import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
  AllAlgoList,
  AllAlgoPropDict,
  AlgoCategoryPropDict,
} from "../../data/algoProps";

const CategoryPropInput = ({
  propType,
  label,
  initValue,
  options,
  setTmpAlgoInfo,
}) => {
  const [value, setValue] = useState(initValue);

  const handlePropChange = (event) => {
    setTmpAlgoInfo((prev) => ({
      ...prev,
      additional: {
        ...prev.additional,
        [propType]: {
          ...prev.additional[propType],
          [event.target.name]: event.target.value,
        },
      },
    }));
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ width: "97%" }}>
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select
        name={label}
        labelId={`${label}-label`}
        id={label}
        value={value}
        label={label}
        onChange={handlePropChange}
      >
        {options.map((name) => (
          <MenuItem key={`${label}-${name}`} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const TextPropInput = ({ propType, label, initValue, setTmpAlgoInfo }) => {
  const [value, setValue] = useState(initValue);

  const handlePropChange = (event) => {
    setTmpAlgoInfo((prev) => ({
      ...prev,
      additional: {
        ...prev.additional,
        [propType]: {
          ...prev.additional[propType],
          [event.target.name]: event.target.value,
        },
      },
    }));
    setValue(event.target.value);
  };

  return (
    <TextField
      name={label}
      id={label}
      label={label}
      variant="outlined"
      value={value}
      sx={{ width: "97%", margin: "10px 0" }}
      onChange={handlePropChange}
    />
  );
};

// All changes in AlgoDetail should be directly set in tmpAlgoInfo
const AlgoDetailOptions = ({ algo, tmpAlgoInfo, setTmpAlgoInfo }) => {
  const [algoType, setAlgoType] = useState(algo.algoType);

  const additionalValues = AllAlgoPropDict[algoType];

  const handleTypeChange = (event) => {
    setTmpAlgoInfo((prev) => ({
      ...prev,
      algoType: event.target.value,
      additional: AllAlgoPropDict[event.target.value],
    }));
    setAlgoType(event.target.value);
  };

  return (
    <Box width="100%">
      <FormControl sx={{ width: "97%" }}>
        <InputLabel id="algo-type-select-label">Algo type</InputLabel>
        <Select
          name="algoType"
          labelId="algo-type-label"
          id="algoType"
          value={algoType}
          label="algoType"
          onChange={handleTypeChange}
        >
          {AllAlgoList.map((name) => (
            <MenuItem key={`algoType-${name}`} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {Object.keys(additionalValues.int).map((valueName) => (
        <TextPropInput
          propType="int"
          key={valueName}
          label={valueName}
          initValue={tmpAlgoInfo.additional.int[valueName]}
          setTmpAlgoInfo={setTmpAlgoInfo}
        />
      ))}
      {Object.keys(additionalValues.float).map((valueName) => (
        <TextPropInput
          propType="float"
          key={valueName}
          label={valueName}
          initValue={tmpAlgoInfo.additional.float[valueName]}
          setTmpAlgoInfo={setTmpAlgoInfo}
        />
      ))}
      {Object.keys(additionalValues.bool).map((valueName) => (
        <CategoryPropInput
          propType="bool"
          key={valueName}
          label={valueName}
          initValue={tmpAlgoInfo.additional.bool[valueName]}
          options={AlgoCategoryPropDict[algoType][valueName]}
          setTmpAlgoInfo={setTmpAlgoInfo}
        />
      ))}
      {Object.keys(additionalValues.category).map((valueName) => (
        <CategoryPropInput
          propType="category"
          key={valueName}
          label={valueName}
          initValue={tmpAlgoInfo.additional.category[valueName]}
          options={AlgoCategoryPropDict[algoType][valueName]}
          setTmpAlgoInfo={setTmpAlgoInfo}
        />
      ))}
    </Box>
  );
};

export default AlgoDetailOptions;
