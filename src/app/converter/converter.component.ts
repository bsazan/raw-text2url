import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  plainTextOfUser="";
  isConvertButtonDisabled= true;
  isOpenAllButtonDisabled = true;
  fieldsetCreated= false;
  convertedUrlSet: any;

  constructor() { }

  ngOnInit(): void {
  }

  inputChange($event: any) {
    this.plainTextOfUser = $event;
    if($event.length > 0) {
      this.isConvertButtonDisabled = false;
    } else {
      this.isConvertButtonDisabled = true;
    }
  }

  convert(){
    let regex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    let replaced_text = this.plainTextOfUser.replace(regex, "$1|").split("|");
    for(var i = 0; i < replaced_text.length; i++) {
      replaced_text[i] = replaced_text[i].trim();
    }
    this.convertedUrlSet = replaced_text.filter((item) => item.startsWith("https") || item.startsWith("http"))
    this.fieldsetCreated = true;
    this.isOpenAllButtonDisabled = false;
  }

  clear(){
    this.plainTextOfUser="";
    this.isConvertButtonDisabled= true;
    this.isOpenAllButtonDisabled = true;
    this.fieldsetCreated= false;
    this.convertedUrlSet=null;
  }

  openAll(){
    for(var i =0 ; i< this.convertedUrlSet.length; i++) {      
      window.open(this.convertedUrlSet[i],"_blank")
    }
  }

}
