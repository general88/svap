const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    nafNum: {
      type: String,
      unique: true,
      uppercase: true,
      trim: true,
    },
    radioRoomEmail: {
      type: String,
      trim: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
    },
    unit: {
      type: String,
      default: null,
    },
    appointment: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: {
        values: ["user", "admin"],
        message: "emum validator failed for path `{PATH}` with value `{VALUE}`",
      },
      default: "user",
    },
  },
  { timestamps: true }
);

// hash the user password before save to database

userSchema.pre("save", async function () {
  // if password is not modified return
  if (!this.isModified("password")) return;
  // else hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);

  this.password = hash;
});

// user model creation
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
