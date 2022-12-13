import { httpService } from "./HttpService";


class GalleriesService {

    async getAll() {
        const response = await httpService.axiosInstance.get("/galleries");
        return response.data
    }

    async add(newCar) {
        try {
            const { data } = await httpService.axiosInstance.post('galleries', newGallery);
            return data;
        } catch (error) {
            console.log(error);
        }
        return null;
    }
    async get(id) {
        try {
            const { data } = await httpService.axiosInstance.get(`galleries/${id}`);
            return data;
        } catch (error) {
            console.log(error);
        }

        return {};
    }
    async edit(id, newGalleries) {
        try {
            const { data } = await httpService.axiosInstance.put(`galleries/${id}`, newGalleries);
            return data;
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    async delete(galleryId) {
        try {
            const { data } = await httpService.axiosInstance.delete(`galleries/${galleryId}`);

            return data;
        } catch (error) {
            console.log(error);
        }

        return {};
    }


}
export default new GalleriesService();