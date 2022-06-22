import Joi from "joi";
const TodoValidation = Joi.object({
  Note: Joi.string().required(),
  Desc: Joi.string().required(),
  //   Type: Joi.alternatives().conditional("isCompleted", {
  //     is: NoteType.isCompleted,
  //     then: Joi.boolean().required(),
  //   }),
});

export default TodoValidation;
