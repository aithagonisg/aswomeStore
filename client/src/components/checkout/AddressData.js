import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import AddressCards from "./AddressCards";

export default function AddressData({ addressList, setSelectedAddress }) {
  const [value, setValue] = React.useState("default");

  const handleChange = (event) => {
    let add_Ifno;
    setValue(event.target.value);
    if (event.target.value === "permanent") {
      add_Ifno = addressList.filter((item) => item.isPermanentAddress);
    } else if (event.target.value === "current") {
      add_Ifno = addressList.filter((item) => !item.isPermanentAddress);
    } else {
      add_Ifno = [{}];
    }
    setSelectedAddress(add_Ifno[0]);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select Address</FormLabel>
      <RadioGroup
        aria-label="address"
        name="address"
        value={value}
        onChange={handleChange}
        style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
      >
        <FormControlLabel value="default" control={<Radio />} label="Deafult" />
        {addressList?.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item.isPermanentAddress ? "permanent" : "current"}
            control={<Radio />}
            label={<AddressCards addressInfo={item} />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
