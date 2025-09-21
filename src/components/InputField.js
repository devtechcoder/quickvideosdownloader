import { Col, Form, Input, Select, InputNumber } from "antd";
import PhoneInput from "react-phone-input-2";
import { useAppContext } from "../context/AppContext";
import lang from "../helper/langHelper";

export const TextInputBox = ({
  label,
  name,
  placeholder,
  rules,
  cover,
  className,
  isDisable,
  inputProps,
  colProps,
  ...props
}) => {
  return (
    <Col span={24} md={cover ? cover.md : 12} sm={24} {...colProps}>
      <Form.Item
        className={!!className ? className : ""}
        label={label}
        name={name}
        rules={rules}
        normalize={(value) => value.trimStart()}
        {...props}
        // {...props}
      >
        <Input placeholder={placeholder} disabled={isDisable} {...inputProps} />
      </Form.Item>
    </Col>
  );
};

export const SelectInput = ({
  label,
  name,
  placeholder,
  options,
  rules,
  cover,
  className,
  defaultValue,
  handleChange,
  colProps,
  ...props
}) => {
  const { language } = useAppContext();
  return (
    <Col md={cover ? cover.md : 12} {...colProps}>
      <Form.Item name={name} label={label} rules={rules}>
        <Select
          {...props}
          placeholder={placeholder}
          className={!!className ? className : ""}
          defaultValue={defaultValue}
          onChange={handleChange}
        >
          {options && options && options.length > 0
            ? options.map((item, index) => (
                <Select.Option
                  key={item._id}
                  value={item._id}
                  label={item.name}
                  onChange={handleChange}
                >
                  <span className="cap">
                    {language !== ("en" || null)
                      ? item[`${language}_name`] ?? item?.name
                      : item?.name}
                  </span>
                </Select.Option>
              ))
            : null}
        </Select>
      </Form.Item>
    </Col>
  );
};

export const MultiSelect = ({
  cover,
  name,
  label,
  rules,
  placeholder,
  className,
  options,
  colProps,
}) => {
  const { language } = useAppContext();
  return (
    <Col md={cover ? cover.md : 12} {...colProps}>
      <Form.Item name={name} label={label} rules={rules}>
        <Select
          placeholder={placeholder}
          className={!!className ? className : ""}
          mode="multiple" // Set mode to "multiple" for selecting multiple values
        >
          {options && options.length > 0
            ? options.map((item, index) => (
                <Select.Option key={item._id} value={item._id}>
                  <span className="cap">
                    {language !== ("en" || null)
                      ? item[`${language}_name`] ?? item?.name
                      : item?.name}
                  </span>
                </Select.Option>
              ))
            : null}
        </Select>
      </Form.Item>
    </Col>
  );
};

export const EmailField = ({ label, name, placeholder, cover, className }) => {
  return (
    <Col md={cover ? cover.md : 12}>
      <Form.Item
        className="mb-0"
        label={label}
        name={name}
        rules={[
          { type: "email", message: "The email is not a valid email!" },
          { required: true, message: "Please enter the email!" },
          {
            max: 50,
            message: "Email should not contain more then 50 characters!",
          },
          {
            min: 5,
            message: "Email should contain at least 5 characters!",
          },
          {
            pattern: new RegExp(
              /^([a-zA-Z0-9._%-]*[a-zA-Z]+[a-zA-Z0-9._%-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
            ),
            message: "Enter valid email!",
          },
        ]}
      >
        <Input autoComplete="off" placeholder={placeholder} />
      </Form.Item>
    </Col>
  );
};

// export const PhoneNumberField = ({
//   label,
//   name,
//   placeholder,
//   cover,
//   className,
//   onChange,
//   inputProps,
//   colProps,
// }) => {
//   return (
//     <Col md={cover ? cover.md : 12} {...colProps}>
//       <Form.Item className="mb-0" label={label ? label : ""} name={name}>
//         <PhoneInput
//           inputProps={{
//             ...inputProps,
//             name: name,
//             required: true,
//             autoFocus: false,
//             placeholder: placeholder,
//           }}
//           isValid={(value, country) => {
//             if (value.match(/1234/)) {
//               return "Invalid value: " + value + ", " + country.name;
//             } else if (value.match(/1234/)) {
//               return "Invalid value: " + value + ", " + country.name;
//             } else {
//               return true;
//             }
//           }}
//           country={"jo"}
//           preferredCountries={["jo"]}
//           onChange={onChange}
//         />
//       </Form.Item>
//     </Col>
//   );
// };

export const PhoneNumberField = ({
  label,
  name,
  placeholder,
  cover,
  className,
  onChange,
  inputProps,
  colProps,
  rules,
  number,
  ...props
}) => {
  return (
    <Col md={cover ? cover.md : 12} {...colProps}>
      <Form.Item
        className="mb-0"
        label={label}
        name={name}
        rules={[
          {
            required: rules ? rules : true,
            validator: (rule, value) => {
              if (!value) {
                return Promise.reject(lang("Please enter phone number"));
              }
              if (!/^\d{8,12}$/.test(number)) {
                return Promise.reject(
                  lang("Phone number must be between 8 and 12 digits")
                );
              }
              return Promise.resolve();
            },
          },
        ]}
      >
        <PhoneInput
          inputProps={{
            name: name,
            required: true,
            autoFocus: false,
            placeholder: placeholder,
            ...inputProps,
          }}
          isValid={(value, country) => {}}
          //value={}
          country={"in"}
          preferredCountries={["in"]}
          onChange={(value, data) => {
            onChange(value, data);
          }}
        />
      </Form.Item>
    </Col>
  );
};

export const NumberInputBox = ({
  label,
  name,
  placeholder,
  rules,
  cover,
  className,
  colProps,
  ...props
}) => {
  return (
    <Col md={cover ? cover.md : 12} {...colProps}>
      <Form.Item
        className={!!className ? className : ""}
        label={label}
        name={name}
        rules={rules}
        {...props}
      >
        <InputNumber placeholder={placeholder} />
      </Form.Item>
    </Col>
  );
};
