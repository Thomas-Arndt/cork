import axiosService from './AxiosService.jsx';


class AdService {
    
    getAllAds(){
        return axiosService.getRestClient().get("/allAds")
    }

    getOneAd(id){
        return axiosService.getRestClient().get(`/oneAd/${id}`)
    }

    createAd(data){
        return axiosService.getRestClient().post("/createAd", data)
    }
    
    updateAd(data){
        return axiosService.getRestClient().put(`/updateAd/${data.id}`, data)
    }

    deleteAd(id){
        return axiosService.getRestClient().delete(`/deleteAd/${id}`)
    }


}

export default new AdService();