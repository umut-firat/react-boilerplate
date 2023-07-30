import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().label("Name").required(),
    surname: yup.string().label("Surname").required(),
    age: yup.number().label("Age").positive().integer().required(),
    gender: yup.string().label("Gender").required(),
  })
  .required();

const FormTest = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      surname: "",
      age: 0,
      gender: "",
    },
  });

  function onSubmit(data: any) {
    console.log({ errors, data });
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label for="name">Name</label>
        <input id="name" {...register("name")} />
        {errors.name && <span role="alert">{errors.name?.message}</span>}
      </div>
      <div>
        <label for="surname">Surname</label>
        <input id="surname" {...register("surname")} />
        {errors.surname && <span role="alert">{errors.surname?.message}</span>}
      </div>
      <div>
        <label for="age">Age</label>
        <input id="age" {...register("age")} />
        {errors.age && <span role="alert">{errors.age?.message}</span>}
      </div>
      <div>
        <label for="gender">Gender</label>
        <input id="gender" {...register("gender")} />
        {errors.gender && <span role="alert">{errors.gender?.message}</span>}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FormTest;
