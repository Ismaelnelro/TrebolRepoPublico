import { model, Schema } from 'mongoose'
import { IUser } from '../interface/user.interface';


const user = new Schema<IUser>({
  credentials: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: false }
  },
  profile: {
    avatar: { type: String, required: false, default: "" },
    userName: { type: String, required: false, default: "trebolUSER" },
    network: [{
      icon: { type: String, required: false },
      name: { type: String, required: false },
      url: { type: String, required: false }
    }],
    styles: {
      backgroundColor: { type: String, default: '' }
    }
  }
});


user.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const User = model<IUser>('UserProfile', user);


export default User;





// const networkSchema = new Schema<INetwork>({
//   icon: { type: String, required: true },
//   name: { type: String, required: true },
//   url: { type: String, required: true }
// });
// const Network = model<INetwork>('Network', networkSchema);

// const userProfileSchema = new Schema<IUserProfile>({
//   avatar: { type: String, required: false, default: "" },
//   userName: { type: String, required: false, default: "trebolUSER" },
//   network: { type: [networkSchema], default: [] },
//   styles: {
//     backgroundColor: { type: String, default: '' }
//   }
// });

// const userSchema = new Schema<IUser>({
//   credentials: {
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     isActive: { type: Boolean, default: false }
//   },
//   profile: userProfileSchema
// });


// userSchema.set('toJSON', {
//   transform: (_document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })

// const User = model('User', userSchema);

// export default User;