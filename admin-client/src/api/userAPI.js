import { baseurl } from "./baseURL";

export const login = async (email, password) => {
  try {
    const response = await baseurl.post("/user/signin", { email, password });
    return response.data; 
  } catch (error) {
    throw error; 
  }
};

export const logoutServer = async () => {
  const response = await baseurl.post("/user/logout");
  return response.data;
};


export const deleteUser = async (userId) => {
  try {
    const response = await baseurl.delete(`/admin/user/${userId}`);
    return response.data; 
  } catch (error) {
    throw error; 
  }
};

export const updateUser = async (userId, status) => {
  try {
    const response = await baseurl.put(`/admin/user/${userId}/status`, status);
    return response.data; 
  } catch (error) {
    throw error; 
  }
};


// get user information
export const getUserProfile = async (userId) => {
  try {
    const response = await baseurl.get(`/user/${userId}`);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.msg || "Failed to get profile. Please try again."
    );
  }
};


// ticker apis
export const closeTicket = async (ticketId) => {
  try {
    const response = await baseurl.patch(
      `/admin/ticket/user/status`,
      { ticketId },
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
export const DeleteTicket = async (ticketId) => {
  try {
    const response = await baseurl.delete(
      `admin/tickets/${ticketId}`,
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// change ticket status
export const changeTicketStatus = async (ticketId, status) => {
  try {
    const response = await baseurl.patch(
      `/admin/ticket/status/${ticketId}`,status,
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// post support tickets chats
export const createTicketChat = async (ticketId, message) => {
  try {
    const response = await baseurl.post(
      `/chat`,
      { ticketId, message },
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
//get ticket chats
export const getTicketChat = async (ticketId) => {
  try {
    const response = await baseurl.get(`/chat/${ticketId}`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};