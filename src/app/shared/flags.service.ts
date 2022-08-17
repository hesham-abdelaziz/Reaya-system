import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class FlagService {
  constructor(private messageService: MessageService) {}
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      detail: 'تمت الإضافة بنجاح !',
    });
  }
  cancelReservition() {
    this.messageService.add({
      severity: 'success',
      detail: 'تم إلغاء الحجز بنجاح !',
    });
  }


  changeSuccess(message) {
    this.messageService.add({
      severity: 'success',
      detail: message,
    });
  }
  rateAdded(){
    this.messageService.add({
      severity: 'success',
      detail: 'تم تسجيل التقييم بنجاح !',
    });
  }
  bookingSuccess(){
    this.messageService.add({
      severity: 'success',
      detail: 'تم الحجز بنجاح !',
    });
  }
  confirmSuccess(message){
    this.messageService.add({
      severity: 'success',
      detail : message
    });
  }
  addSuccess(){
    this.messageService.add({
      severity: 'success',
      detail: 'تم إضافة الإعلان بنجاح !',
    });
  }
  editSuccess() {
    this.messageService.add({
      severity: 'success',
      detail: ' تم التعديل بنجاح !',
    });
  }
  deleteSuccess() {
    this.messageService.add({
      severity: 'success',
      detail: `تم الحذف  بنجاح !`,
    });
  }

  error() {
    this.messageService.add({
      severity: 'error',
      detail: 'من فضلك ادخل البيانات !',
    });
  }
  notLogged(message){
    this.messageService.add({
      severity : 'error',
      detail : message
    })
  }
  apiError() {
    this.messageService.add({
      severity: 'error',
      detail: 'خطأ !',
    });
  }
  apiErrorMsg(message) {
    this.messageService.add({
      severity: 'error',
      detail: message,
      life : 6000
    });
  }
  existError(message) {
    this.messageService.add({
      severity: 'error',
      detail: message,
    });
  }
  emailExist(message) {
    this.messageService.add({
      severity: 'error',
      detail: message,
    });
  }

  existApiError(message){
    this.messageService.add({
      severity : 'error',
      detail : message
    })
  }
}
