import axiosService from './AxiosService.jsx';


class AdService {
    
    getAllAds(){
        return axiosService.getRestClient().get("/allAds")
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    getoneAd(id){
        return axiosService.getRestClient().get(`/oneAd/${id}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    createAd(data){
        return axiosService.getRestClient().post("/createAd", data)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }
    
    updateAd(data){
        return axiosService.getRestClient().put(`/updateAd/${data.id}`, data)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    deleteAd(id){
        return axiosService.getRestClient().delete(`/deleteAd/${id}`)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }


}

export default new AdService();