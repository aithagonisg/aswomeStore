import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import PaymentCard from "./PaymentCard";

export default function CardData({ cardList, setSelectedCard }) {
  const [value, setValue] = React.useState("default");

  const handleChange = (event) => {
    let add_Ifno;
    setValue(event.target.value);
    if (event.target.value === "card") {
      add_Ifno = cardList;
    } else {
      add_Ifno = [{}];
    }
    setSelectedCard(add_Ifno[0]);
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
        {cardList?.map((item, index) => (
          <FormControlLabel
            key={index}
            value="card"
            control={<Radio />}
            label={<PaymentCard cardInfo={item} />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
