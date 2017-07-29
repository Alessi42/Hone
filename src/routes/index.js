import Home from './Home'
import Progress from './Progress'
import User from './User'
import Counter from './Counter'
import Workouts from './Workouts'
import Challenges from './Challenges'

export default {
	indexRoute: Home,
	challengesRoute: Challenges,
	progressRoute: Progress,
	userRoute: User,
	childRoutes: [Counter,Workouts]
}
