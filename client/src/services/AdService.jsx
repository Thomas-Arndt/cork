import axiosService from './AxiosService.jsx';


class AdService {
    
    getAllAds(category){
        return axiosService.getRestClient().get(`${process.env.REACT_APP_BROWSE}${category}`)
    }

    getOneAd(id){
        return axiosService.getRestClient().get(`${process.env.REACT_APP_DETAIL}${id}`)
    }

    createAd(data){
        return axiosService.getRestClient().post(`${process.env.REACT_APP_NEW}`, data)
    }

    contactSeller(data){
        return axiosService.getRestClient().post(`${process.env.REACT_APP_EMAIL}`, data)
    }
    
    updateAd(data){
        return axiosService.getRestClient().put(`${process.env.REACT_APP_EDIT}${data.id}`, data)
    }

    deleteAd(id){
        return axiosService.getRestClient().delete(`${process.env.REACT_APP_REMOVE}${id}`)
    }


}

export default new AdService();