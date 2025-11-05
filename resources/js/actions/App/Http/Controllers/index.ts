import ExpertController from './ExpertController'
import CustomerController from './CustomerController'
import AppointmentController from './AppointmentController'
import CustomerServiceController from './CustomerServiceController'
import Settings from './Settings'

const Controllers = {
    ExpertController: Object.assign(ExpertController, ExpertController),
    CustomerController: Object.assign(CustomerController, CustomerController),
    AppointmentController: Object.assign(AppointmentController, AppointmentController),
    CustomerServiceController: Object.assign(CustomerServiceController, CustomerServiceController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers