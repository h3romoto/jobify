import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormRow, Alert } from "../../components";
import { usePaaSContext } from "../../context/PaaSContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import { initialState } from "../../context/PaaSContext";


// This page uses only the initial state from PaaSContext

const Build = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState()
  const { id, specs, region, tier, pub_key, isLoading } = usePaaSContext(initialState);

  const handleSubmit = (e) => {
    console.log("You submitted your form");
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Build your instance</h3>
        <FormRow
          type="text"
          name="OS"
          // value={}
          // handleChange={(e) => {}}
        />
        <FormRow
          type="text"
          name="Tier"
          // value={}
          // handleChange={(e) => {}}
        />
        <FormRow
          type="text"
          name="RAM"
          // value={}
          // handleChange={(e) => {}}
        />
        <FormRow
          type="text"
          name="Storage"
          // value={}
          // handleChange={(e) => {}}
        />

        <button className="btn btn-block" type="submit" disabled={isLoading}>
          {isLoading ? "Please Wait..." : "Build"}
        </button>
      </form>

      {isLoading && (
        <button className="btn btn-block" type="submit" disabled={isLoading}>
          Connect on Web Console
        </button>
      )}

      {isLoading && (
        <button className="btn btn-block" type="submit" disabled={isLoading}>
          Connect via SSH
        </button>
      )}
    </Wrapper>
  );
};
export default Build;
