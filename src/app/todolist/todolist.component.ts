import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

  todoList: { id: number; data: string, isCompleted:string }[] = [];
  isDisabled: boolean = true;
  show:boolean = true;
  showTodo:boolean = false;
  searchArr:any[] = [];

  addTodo(todo:any, search:any) {
    search.disabled = true;
    todo.disabled = false;
    this.show = true;

    this.todoList.push({ id: this.todoList.length, data: todo.value, isCompleted:''});
    todo.value = ''; 
    // this.myList(this.todoList);  
  }

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter((ele) => ele.id != id);
  }

  editTodo(data: any) {
    data.disabled = false;
  }

  saveTodo(data: any, id: number) {
    let ele = this.todoList.filter((ele) => ele.id == id);
    ele[0].data = data.value;
    data.disabled = true;
  }
  
  searchTodo(todo:any, search:any) {
    search.disabled = false;
    todo.disabled = true;
    
  }

  searchTodoWord(searchData: any, todo:any) {
    this.showTodo = true;
    this.searchArr = [];
    const inputData = searchData.value;
    let filter = inputData.toUpperCase(), txtValue, count = 0;

    for(let i = 0; i < this.todoList.length; i++) {
       txtValue = this.todoList[i].data;
       if(txtValue.toUpperCase().indexOf(filter) > -1) {
          this.searchArr.push(this.todoList[i]);
          
          count++;
       }
    }
    if(count == 0) {
      todo.value = searchData.value;
    }
  //   const li = this.ElementRef.nativeElement.getElementsByTagName('li');
  //   const inputData = searchData.value;
  //   let input,txtValue,filter,count = 0;
  //   filter = inputData.toUpperCase();

  // for (let i = 0; i < li.length; i++) {
  //   // input = li[i].getElementsByTagName("input")[0];
  //   input = li[i].getElementsByClassName("list-value")[0];
  //   txtValue = input.value;

  //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //     li[i].style.display = "";
  //     count++;
  //   } else {
  //     li[i].style.display = "none";
  //   }
  // }
  // if (count == 0) {
  //   todo.value = searchData.value;
  // }
  }

  checkOrNot(id:number) {
    
  } 

  myList() {
    return this.todoList;
  }

  
}
