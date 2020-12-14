import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import CategoryEntity from 'src/db/entity/category.entity';
import ItemEntity from 'src/db/entity/item.entity';
import LabelEntity from 'src/db/entity/label.entity';
import taskEntity from 'src/db/entity/task.entity';
import CreateCategoryDto from './dto/create-category.dto';
import CreateItemDto from './dto/create-item.dto';
import CreateLabelDto from './dto/create-label.dto';
import CreateTaskDto from './dto/create-task.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoServices: TodoService) { }

    // Task
    @ApiBearerAuth()
    @Post('task/post')
    insertTask(@Body() task: CreateTaskDto) {
        return this.todoServices.insertTask(task);
    }

    @ApiBearerAuth()
    @Get('task')
    getAllTasks() {
        return this.todoServices.getAllTasks();
    }

    @ApiBearerAuth()
    @ApiQuery({
        name: 'taskID',
        required: true,
        type: Number
    })
    @Delete('task/delete')
    deleteTask(@Query('taskID') taskID): Promise<taskEntity> {
        return this.todoServices.deleteTask(taskID);
    }

    // Category
    @ApiBearerAuth()
    @Post('category/post')
    insertCategory(@Body() category: CreateCategoryDto) {
        return this.todoServices.insertCategory(category);
    }

    @ApiBearerAuth()
    @Get('category')
    getAllCategories() {
        return this.todoServices.getAllCategories();
    }

    //Item
    @ApiBearerAuth()
    @Post('item/post')
    insertItem(@Body() item: CreateItemDto) {
        return this.todoServices.insertItem(item);
    }

    @ApiBearerAuth()
    @Get('item/')
    getAllItems() {
        return this.todoServices.getAllItems();
    }

    @ApiBearerAuth()
    @ApiQuery({
        name: 'itemID',
        required: true,
        type: Number,
    })
    @Delete('item/delete')
    deleteItem(@Query('itemID') itemID): Promise<ItemEntity> {
        return this.todoServices.deleteItem(itemID);
    }

    @ApiBearerAuth()
    @ApiQuery({
        name: 'itemID',
        required: true,
        type: Number,
    })
    @Put('item/update')
    updateItem(@Query('itemID') itemID, @Body() item: CreateItemDto): Promise<ItemEntity> {
        return this.todoServices.updateItem(itemID, item);
    }

    // Label
    @ApiBearerAuth()
    @Post('label/post')
    insertLabel(@Body() label: CreateLabelDto) {
        return this.todoServices.insertLabel(label);
    }

    @ApiBearerAuth()
    @Get('label')
    getAllLabels() {
      return this.todoServices.getAllLabels();
    }
  
    @ApiBearerAuth()
    @ApiQuery({
        name: 'labelID',
        required: true,
        type: Number,
    })
    @Delete('label/delete')
    deleteLabel(@Query('labelID') labelID): Promise<LabelEntity> {
        return this.todoServices.deleteLabel(labelID);
    }

}
