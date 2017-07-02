import Home from './Home'
import Progress from './Progress'
import User from './User'
import Counter from './Counter'
import Workouts from './Workouts'

// Arms,Abs,Cardio,Legs
export default {
	indexRoute: Home,
	progressRoute: Progress,
	userRoute: User,
	childRoutes: [Counter,Workouts]
}
