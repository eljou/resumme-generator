import mongoose, { Schema } from 'mongoose'

const ProfileSchema = new mongoose.Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	resumme: { type: String, required: true },
	status: { type: String },
	phone: { type: String },
	location: { type: String },
	company: { type: String },
	website: { type: String },
	skillsByCategory: [
		{
			category: { type: String, requided: true },
			skillsList: [
				{
					name: { type: String, required: true },
					points: { type: Number, required: true }
				}
			]
		}
	],
	socialNetworks: [
		{
			network: { type: String },
			profileURL: { type: String }
		}
	],
	experience: [
		{
			title: { type: String, required: true },
			company: { type: String, required: true },
			location: { type: String },
			from: { type: Date, required: true },
			to: { type: Date },
			current: { type: Boolean, default: false },
			description: { type: String }
		}
	],
	education: [
		{
			school: { type: String, required: true },
			degree: { type: String, required: true },
			fieldOfStudy: { type: String },
			from: { type: Date, required: true },
			to: { type: Date },
			current: { type: Boolean, default: false },
			description: { type: String }
		}
	],
	date: {
		type: Date,
		default: Date.now
	}
})

export default mongoose.model('profiles', ProfileSchema)
