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

export const conversationRoomService = {
  getCurrentUserConversationRooms,
  getPreviousMessages,
};
