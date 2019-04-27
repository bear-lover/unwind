import { apiService } from './api.service';
import { ConversationRoom } from '../models/ConversationRoom';
import { ICursorPaginated } from '../models/ICursorPaginated';
import { Message } from '../models/Message';

const getCurrentUserConversationRooms = async () => {
  return apiService.get<ConversationRoom[]>('/users/me/conversationRooms');
};

const getPreviousMessages = async (conversationRoomId: string, cursor: string) => {
  return apiService.get<ICursorPaginated<Message>>(`/conversationRooms/${conversationRoomId}/messages`, { cursor });
};

const create = async (name: string) => {
  return apiService.post<ConversationRoom>(`/conversationRooms`, { name });
};

const joinConversationRoom = async (userId: string, roomId: string) => {
  return apiService.put(`/conversationRooms/${roomId}/users/${userId}`);
};

const leaveConversationRoom = async (userId: string, roomId: string) => {
  return apiService.del(`/conversationRooms/${roomId}/users/${userId}`);
};

export const conversationRoomService = {
  getCurrentUserConversationRooms,
  getPreviousMessages,
  create,
  joinConversationRoom,
  leaveConversationRoom,
};
