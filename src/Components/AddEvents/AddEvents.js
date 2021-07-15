import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "4d2917a1648a2309ca2f415f3974a5e6");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => {
        console.log(res.data.data.display_url);
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="Event name"
          ref={register}
        />

        <input
          name="exampleRequired"
          type="file"
          onChange={handleImageUpload}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddEvents;
