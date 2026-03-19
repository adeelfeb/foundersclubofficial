import mongoose from 'mongoose';

const NewsletterSignupSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 320,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

NewsletterSignupSchema.index({ email: 1 }, { unique: true });
NewsletterSignupSchema.index({ createdAt: -1 });

const NewsletterSignup =
  mongoose.models.NewsletterSignup ||
  mongoose.model('NewsletterSignup', NewsletterSignupSchema);

export default NewsletterSignup;
