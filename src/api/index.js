import axioss from './create'

export default class API {

    static async findUserAll() {
        return await axioss.get('users')
    }

    static findByUserName(name) {
        return axioss.get(`users/${name}`)
    }

}