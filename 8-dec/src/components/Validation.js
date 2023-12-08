import * as Yup from "yup";

export const MobileValidation = Yup.string()
.test(
    "is-numeric",
    "Phone number can only contain numbers",
    (value) => /^\d+$/.test(value)
)
.matches(/^[0-9]{10}$/, {
    message: "Phone number must be exactly 10 digits",
    excludeEmptyString: true,
})
.required("Phone number is required");

export const PasswordValidation = Yup.string().trim().required("Required")