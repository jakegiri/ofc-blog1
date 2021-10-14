import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Role: crudResolvers.RoleCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  Catagory: crudResolvers.CatagoryCrudResolver,
  RolesAdministrators: crudResolvers.RolesAdministratorsCrudResolver,
  PostsUsers: crudResolvers.PostsUsersCrudResolver,
  CatagoriesPosts: crudResolvers.CatagoriesPostsCrudResolver
};
const relationResolversMap = {
  Role: relationResolvers.RoleRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  Catagory: relationResolvers.CatagoryRelationsResolver,
  RolesAdministrators: relationResolvers.RolesAdministratorsRelationsResolver,
  PostsUsers: relationResolvers.PostsUsersRelationsResolver,
  CatagoriesPosts: relationResolvers.CatagoriesPostsRelationsResolver
};
const actionResolversMap = {
  Role: {
    role: actionResolvers.FindUniqueRoleResolver,
    findFirstRole: actionResolvers.FindFirstRoleResolver,
    roles: actionResolvers.FindManyRoleResolver,
    createRole: actionResolvers.CreateRoleResolver,
    createManyRole: actionResolvers.CreateManyRoleResolver,
    deleteRole: actionResolvers.DeleteRoleResolver,
    updateRole: actionResolvers.UpdateRoleResolver,
    deleteManyRole: actionResolvers.DeleteManyRoleResolver,
    updateManyRole: actionResolvers.UpdateManyRoleResolver,
    upsertRole: actionResolvers.UpsertRoleResolver,
    aggregateRole: actionResolvers.AggregateRoleResolver,
    groupByRole: actionResolvers.GroupByRoleResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Post: {
    post: actionResolvers.FindUniquePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    posts: actionResolvers.FindManyPostResolver,
    createPost: actionResolvers.CreatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    deletePost: actionResolvers.DeletePostResolver,
    updatePost: actionResolvers.UpdatePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    upsertPost: actionResolvers.UpsertPostResolver,
    aggregatePost: actionResolvers.AggregatePostResolver,
    groupByPost: actionResolvers.GroupByPostResolver
  },
  Catagory: {
    catagory: actionResolvers.FindUniqueCatagoryResolver,
    findFirstCatagory: actionResolvers.FindFirstCatagoryResolver,
    catagories: actionResolvers.FindManyCatagoryResolver,
    createCatagory: actionResolvers.CreateCatagoryResolver,
    createManyCatagory: actionResolvers.CreateManyCatagoryResolver,
    deleteCatagory: actionResolvers.DeleteCatagoryResolver,
    updateCatagory: actionResolvers.UpdateCatagoryResolver,
    deleteManyCatagory: actionResolvers.DeleteManyCatagoryResolver,
    updateManyCatagory: actionResolvers.UpdateManyCatagoryResolver,
    upsertCatagory: actionResolvers.UpsertCatagoryResolver,
    aggregateCatagory: actionResolvers.AggregateCatagoryResolver,
    groupByCatagory: actionResolvers.GroupByCatagoryResolver
  },
  RolesAdministrators: {
    findUniqueRolesAdministrators: actionResolvers.FindUniqueRolesAdministratorsResolver,
    findFirstRolesAdministrators: actionResolvers.FindFirstRolesAdministratorsResolver,
    findManyRolesAdministrators: actionResolvers.FindManyRolesAdministratorsResolver,
    createRolesAdministrators: actionResolvers.CreateRolesAdministratorsResolver,
    createManyRolesAdministrators: actionResolvers.CreateManyRolesAdministratorsResolver,
    deleteRolesAdministrators: actionResolvers.DeleteRolesAdministratorsResolver,
    updateRolesAdministrators: actionResolvers.UpdateRolesAdministratorsResolver,
    deleteManyRolesAdministrators: actionResolvers.DeleteManyRolesAdministratorsResolver,
    updateManyRolesAdministrators: actionResolvers.UpdateManyRolesAdministratorsResolver,
    upsertRolesAdministrators: actionResolvers.UpsertRolesAdministratorsResolver,
    aggregateRolesAdministrators: actionResolvers.AggregateRolesAdministratorsResolver,
    groupByRolesAdministrators: actionResolvers.GroupByRolesAdministratorsResolver
  },
  PostsUsers: {
    findUniquePostsUsers: actionResolvers.FindUniquePostsUsersResolver,
    findFirstPostsUsers: actionResolvers.FindFirstPostsUsersResolver,
    findManyPostsUsers: actionResolvers.FindManyPostsUsersResolver,
    createPostsUsers: actionResolvers.CreatePostsUsersResolver,
    createManyPostsUsers: actionResolvers.CreateManyPostsUsersResolver,
    deletePostsUsers: actionResolvers.DeletePostsUsersResolver,
    updatePostsUsers: actionResolvers.UpdatePostsUsersResolver,
    deleteManyPostsUsers: actionResolvers.DeleteManyPostsUsersResolver,
    updateManyPostsUsers: actionResolvers.UpdateManyPostsUsersResolver,
    upsertPostsUsers: actionResolvers.UpsertPostsUsersResolver,
    aggregatePostsUsers: actionResolvers.AggregatePostsUsersResolver,
    groupByPostsUsers: actionResolvers.GroupByPostsUsersResolver
  },
  CatagoriesPosts: {
    findUniqueCatagoriesPosts: actionResolvers.FindUniqueCatagoriesPostsResolver,
    findFirstCatagoriesPosts: actionResolvers.FindFirstCatagoriesPostsResolver,
    findManyCatagoriesPosts: actionResolvers.FindManyCatagoriesPostsResolver,
    createCatagoriesPosts: actionResolvers.CreateCatagoriesPostsResolver,
    createManyCatagoriesPosts: actionResolvers.CreateManyCatagoriesPostsResolver,
    deleteCatagoriesPosts: actionResolvers.DeleteCatagoriesPostsResolver,
    updateCatagoriesPosts: actionResolvers.UpdateCatagoriesPostsResolver,
    deleteManyCatagoriesPosts: actionResolvers.DeleteManyCatagoriesPostsResolver,
    updateManyCatagoriesPosts: actionResolvers.UpdateManyCatagoriesPostsResolver,
    upsertCatagoriesPosts: actionResolvers.UpsertCatagoriesPostsResolver,
    aggregateCatagoriesPosts: actionResolvers.AggregateCatagoriesPostsResolver,
    groupByCatagoriesPosts: actionResolvers.GroupByCatagoriesPostsResolver
  }
};
const resolversInfo = {
  Role: ["role", "findFirstRole", "roles", "createRole", "createManyRole", "deleteRole", "updateRole", "deleteManyRole", "updateManyRole", "upsertRole", "aggregateRole", "groupByRole"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  Catagory: ["catagory", "findFirstCatagory", "catagories", "createCatagory", "createManyCatagory", "deleteCatagory", "updateCatagory", "deleteManyCatagory", "updateManyCatagory", "upsertCatagory", "aggregateCatagory", "groupByCatagory"],
  RolesAdministrators: ["findUniqueRolesAdministrators", "findFirstRolesAdministrators", "findManyRolesAdministrators", "createRolesAdministrators", "createManyRolesAdministrators", "deleteRolesAdministrators", "updateRolesAdministrators", "deleteManyRolesAdministrators", "updateManyRolesAdministrators", "upsertRolesAdministrators", "aggregateRolesAdministrators", "groupByRolesAdministrators"],
  PostsUsers: ["findUniquePostsUsers", "findFirstPostsUsers", "findManyPostsUsers", "createPostsUsers", "createManyPostsUsers", "deletePostsUsers", "updatePostsUsers", "deleteManyPostsUsers", "updateManyPostsUsers", "upsertPostsUsers", "aggregatePostsUsers", "groupByPostsUsers"],
  CatagoriesPosts: ["findUniqueCatagoriesPosts", "findFirstCatagoriesPosts", "findManyCatagoriesPosts", "createCatagoriesPosts", "createManyCatagoriesPosts", "deleteCatagoriesPosts", "updateCatagoriesPosts", "deleteManyCatagoriesPosts", "updateManyCatagoriesPosts", "upsertCatagoriesPosts", "aggregateCatagoriesPosts", "groupByCatagoriesPosts"]
};
const relationResolversInfo = {
  Role: ["admistrators"],
  User: ["posts", "roles"],
  Post: ["users", "catagories", "mainCatagory"],
  Catagory: ["mainCatagoryPosts", "posts"],
  RolesAdministrators: ["role", "user"],
  PostsUsers: ["post", "user"],
  CatagoriesPosts: ["catagory", "post"]
};
const modelsInfo = {
  Role: ["id", "name", "canQueryUsers", "canCrudUsers", "canQueryRoles", "canCrudRoles", "canQueryPosts", "canCrudPosts", "createdAt", "modifiedAt", "deletedAt"],
  User: ["id", "firstName", "lastName", "email", "createdAt", "modifiedAt", "deletedAt"],
  Post: ["id", "title", "description", "mainCatagoryId"],
  Catagory: ["id", "name", "createdAt", "modifiedAt"],
  RolesAdministrators: ["roleId", "administratorId"],
  PostsUsers: ["postId", "userId"],
  CatagoriesPosts: ["catagoryId", "postId"]
};
const inputsInfo = {
  RoleWhereInput: ["AND", "OR", "NOT", "id", "name", "admistrators", "canQueryUsers", "canCrudUsers", "canQueryRoles", "canCrudRoles", "canQueryPosts", "canCrudPosts", "createdAt", "modifiedAt", "deletedAt"],
  RoleOrderByInput: ["id", "name", "canQueryUsers", "canCrudUsers", "canQueryRoles", "canCrudRoles", "canQueryPosts", "canCrudPosts", "createdAt", "modifiedAt", "deletedAt"],
  RoleWhereUniqueInput: ["id"],
  RoleScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "canQueryUsers", "canCrudUsers", "canQueryRoles", "canCrudRoles", "canQueryPosts", "canCrudPosts", "createdAt", "modifiedAt", "deletedAt"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "firstName", "lastName", "email", "password", "posts", "roles", "createdAt", "modifiedAt", "deletedAt"],
  UserOrderByInput: ["id", "firstName", "lastName", "email", "password", "createdAt", "modifiedAt", "deletedAt"],
  UserWhereUniqueInput: ["id", "email"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "firstName", "lastName", "email", "password", "createdAt", "modifiedAt", "deletedAt"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "users", "catagories", "mainCatagory", "mainCatagoryId"],
  PostOrderByInput: ["id", "title", "description", "mainCatagoryId"],
  PostWhereUniqueInput: ["id"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "mainCatagoryId"],
  CatagoryWhereInput: ["AND", "OR", "NOT", "id", "name", "mainCatagoryPosts", "posts", "createdAt", "modifiedAt"],
  CatagoryOrderByInput: ["id", "name", "createdAt", "modifiedAt"],
  CatagoryWhereUniqueInput: ["id", "name"],
  CatagoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "modifiedAt"],
  RolesAdministratorsWhereInput: ["AND", "OR", "NOT", "role", "roleId", "user", "administratorId"],
  RolesAdministratorsOrderByInput: ["roleId", "administratorId"],
  RolesAdministratorsWhereUniqueInput: ["roleId_administratorId"],
  RolesAdministratorsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "roleId", "administratorId"],
  PostsUsersWhereInput: ["AND", "OR", "NOT", "post", "postId", "user", "userId"],
  PostsUsersOrderByInput: ["postId", "userId"],
  PostsUsersWhereUniqueInput: ["postId_userId"],
  PostsUsersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "postId", "userId"],
  CatagoriesPostsWhereInput: ["AND", "OR", "NOT", "catagory", "catagoryId", "post", "postId"],
  CatagoriesPostsOrderByInput: ["catagoryId", "postId"],
  CatagoriesPostsWhereUniqueInput: ["catagoryId_postId"],
  CatagoriesPostsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "catagoryId", "postId"],
  RoleCreateInput: ["id", "name", "canQueryUsers", "canCrudUsers", "canQueryRoles", "canCrudRoles", "canQueryPosts", "canCrudPosts", "createdAt", "modifiedAt", "deletedAt", "admistrators"],
  RoleUpdateInput: ["id", "name", "canQueryUsers", "canCrudUsers", "canQueryRoles", "canCrudRoles", "canQueryPosts", "canCrudPosts", "createdAt", "modifiedAt", "deletedAt", "admistrators"],
  RoleCreateManyInput: ["id", "name", "canQueryUsers", "canCrudUsers", "canQueryRoles", "canCrudRoles", "canQueryPosts", "canCrudPosts", "createdAt", "modifiedAt", "deletedAt"],
  RoleUpdateManyMutationInput: ["id", "name", "canQueryUsers", "canCrudUsers", "canQueryRoles", "canCrudRoles", "canQueryPosts", "canCrudPosts", "createdAt", "modifiedAt", "deletedAt"],
  UserCreateInput: ["id", "firstName", "lastName", "email", "password", "createdAt", "modifiedAt", "deletedAt", "posts", "roles"],
  UserUpdateInput: ["id", "firstName", "lastName", "email", "password", "createdAt", "modifiedAt", "deletedAt", "posts", "roles"],
  UserCreateManyInput: ["id", "firstName", "lastName", "email", "password", "createdAt", "modifiedAt", "deletedAt"],
  UserUpdateManyMutationInput: ["id", "firstName", "lastName", "email", "password", "createdAt", "modifiedAt", "deletedAt"],
  PostCreateInput: ["id", "title", "description", "users", "catagories", "mainCatagory"],
  PostUpdateInput: ["id", "title", "description", "users", "catagories", "mainCatagory"],
  PostCreateManyInput: ["id", "title", "description", "mainCatagoryId"],
  PostUpdateManyMutationInput: ["id", "title", "description"],
  CatagoryCreateInput: ["id", "name", "createdAt", "modifiedAt", "mainCatagoryPosts", "posts"],
  CatagoryUpdateInput: ["id", "name", "createdAt", "modifiedAt", "mainCatagoryPosts", "posts"],
  CatagoryCreateManyInput: ["id", "name", "createdAt", "modifiedAt"],
  CatagoryUpdateManyMutationInput: ["id", "name", "createdAt", "modifiedAt"],
  RolesAdministratorsCreateInput: ["role", "user"],
  RolesAdministratorsUpdateInput: ["role", "user"],
  RolesAdministratorsCreateManyInput: ["roleId", "administratorId"],
  RolesAdministratorsUpdateManyMutationInput: [],
  PostsUsersCreateInput: ["post", "user"],
  PostsUsersUpdateInput: ["post", "user"],
  PostsUsersCreateManyInput: ["postId", "userId"],
  PostsUsersUpdateManyMutationInput: [],
  CatagoriesPostsCreateInput: ["catagory", "post"],
  CatagoriesPostsUpdateInput: ["catagory", "post"],
  CatagoriesPostsCreateManyInput: ["catagoryId", "postId"],
  CatagoriesPostsUpdateManyMutationInput: [],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  RolesAdministratorsListRelationFilter: ["every", "some", "none"],
  BoolNullableFilter: ["equals", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  PostsUsersListRelationFilter: ["every", "some", "none"],
  CatagoriesPostsListRelationFilter: ["every", "some", "none"],
  CatagoryRelationFilter: ["is", "isNot"],
  PostListRelationFilter: ["every", "some", "none"],
  RoleRelationFilter: ["is", "isNot"],
  UserRelationFilter: ["is", "isNot"],
  RolesAdministratorsRoleIdAdministratorIdCompoundUniqueInput: ["roleId", "administratorId"],
  PostRelationFilter: ["is", "isNot"],
  PostsUsersPostIdUserIdCompoundUniqueInput: ["postId", "userId"],
  CatagoriesPostsCatagoryIdPostIdCompoundUniqueInput: ["catagoryId", "postId"],
  RolesAdministratorsCreateNestedManyWithoutRoleInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableBoolFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  RolesAdministratorsUpdateManyWithoutRoleInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostsUsersCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  RolesAdministratorsCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostsUsersUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  RolesAdministratorsUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostsUsersCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  CatagoriesPostsCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  CatagoryCreateNestedOneWithoutMainCatagoryPostsInput: ["create", "connectOrCreate", "connect"],
  PostsUsersUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CatagoriesPostsUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CatagoryUpdateOneRequiredWithoutMainCatagoryPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostCreateNestedManyWithoutMainCatagoryInput: ["create", "connectOrCreate", "createMany", "connect"],
  CatagoriesPostsCreateNestedManyWithoutCatagoryInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostUpdateManyWithoutMainCatagoryInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CatagoriesPostsUpdateManyWithoutCatagoryInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  RoleCreateNestedOneWithoutAdmistratorsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutRolesInput: ["create", "connectOrCreate", "connect"],
  RoleUpdateOneRequiredWithoutAdmistratorsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutRolesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  PostUpdateOneRequiredWithoutUsersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CatagoryCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutCatagoriesInput: ["create", "connectOrCreate", "connect"],
  CatagoryUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneRequiredWithoutCatagoriesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolNullableFilter: ["equals", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  RolesAdministratorsCreateWithoutRoleInput: ["user"],
  RolesAdministratorsCreateOrConnectWithoutRoleInput: ["where", "create"],
  RolesAdministratorsCreateManyRoleInputEnvelope: ["data", "skipDuplicates"],
  RolesAdministratorsUpsertWithWhereUniqueWithoutRoleInput: ["where", "update", "create"],
  RolesAdministratorsUpdateWithWhereUniqueWithoutRoleInput: ["where", "data"],
  RolesAdministratorsUpdateManyWithWhereWithoutRoleInput: ["where", "data"],
  RolesAdministratorsScalarWhereInput: ["AND", "OR", "NOT", "roleId", "administratorId"],
  PostsUsersCreateWithoutUserInput: ["post"],
  PostsUsersCreateOrConnectWithoutUserInput: ["where", "create"],
  PostsUsersCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  RolesAdministratorsCreateWithoutUserInput: ["role"],
  RolesAdministratorsCreateOrConnectWithoutUserInput: ["where", "create"],
  RolesAdministratorsCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  PostsUsersUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  PostsUsersUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  PostsUsersUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  PostsUsersScalarWhereInput: ["AND", "OR", "NOT", "postId", "userId"],
  RolesAdministratorsUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  RolesAdministratorsUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  RolesAdministratorsUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  PostsUsersCreateWithoutPostInput: ["user"],
  PostsUsersCreateOrConnectWithoutPostInput: ["where", "create"],
  PostsUsersCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  CatagoriesPostsCreateWithoutPostInput: ["catagory"],
  CatagoriesPostsCreateOrConnectWithoutPostInput: ["where", "create"],
  CatagoriesPostsCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  CatagoryCreateWithoutMainCatagoryPostsInput: ["id", "name", "createdAt", "modifiedAt", "posts"],
  CatagoryCreateOrConnectWithoutMainCatagoryPostsInput: ["where", "create"],
  PostsUsersUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  PostsUsersUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  PostsUsersUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  CatagoriesPostsUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  CatagoriesPostsUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  CatagoriesPostsUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  CatagoriesPostsScalarWhereInput: ["AND", "OR", "NOT", "catagoryId", "postId"],
  CatagoryUpsertWithoutMainCatagoryPostsInput: ["update", "create"],
  CatagoryUpdateWithoutMainCatagoryPostsInput: ["id", "name", "createdAt", "modifiedAt", "posts"],
  PostCreateWithoutMainCatagoryInput: ["id", "title", "description", "users", "catagories"],
  PostCreateOrConnectWithoutMainCatagoryInput: ["where", "create"],
  PostCreateManyMainCatagoryInputEnvelope: ["data", "skipDuplicates"],
  CatagoriesPostsCreateWithoutCatagoryInput: ["post"],
  CatagoriesPostsCreateOrConnectWithoutCatagoryInput: ["where", "create"],
  CatagoriesPostsCreateManyCatagoryInputEnvelope: ["data", "skipDuplicates"],
  PostUpsertWithWhereUniqueWithoutMainCatagoryInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutMainCatagoryInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutMainCatagoryInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "mainCatagoryId"],
  CatagoriesPostsUpsertWithWhereUniqueWithoutCatagoryInput: ["where", "update", "create"],
  CatagoriesPostsUpdateWithWhereUniqueWithoutCatagoryInput: ["where", "data"],
  CatagoriesPostsUpdateManyWithWhereWithoutCatagoryInput: ["where", "data"],
  RoleCreateWithoutAdmistratorsInput: ["id", "name", "canQueryUsers", "canCrudUsers", "canQueryRoles", "canCrudRoles", "canQueryPosts", "canCrudPosts", "createdAt", "modifiedAt", "deletedAt"],
  RoleCreateOrConnectWithoutAdmistratorsInput: ["where", "create"],
  UserCreateWithoutRolesInput: ["id", "firstName", "lastName", "email", "password", "createdAt", "modifiedAt", "deletedAt", "posts"],
  UserCreateOrConnectWithoutRolesInput: ["where", "create"],
  RoleUpsertWithoutAdmistratorsInput: ["update", "create"],
  RoleUpdateWithoutAdmistratorsInput: ["id", "name", "canQueryUsers", "canCrudUsers", "canQueryRoles", "canCrudRoles", "canQueryPosts", "canCrudPosts", "createdAt", "modifiedAt", "deletedAt"],
  UserUpsertWithoutRolesInput: ["update", "create"],
  UserUpdateWithoutRolesInput: ["id", "firstName", "lastName", "email", "password", "createdAt", "modifiedAt", "deletedAt", "posts"],
  PostCreateWithoutUsersInput: ["id", "title", "description", "catagories", "mainCatagory"],
  PostCreateOrConnectWithoutUsersInput: ["where", "create"],
  UserCreateWithoutPostsInput: ["id", "firstName", "lastName", "email", "password", "createdAt", "modifiedAt", "deletedAt", "roles"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  PostUpsertWithoutUsersInput: ["update", "create"],
  PostUpdateWithoutUsersInput: ["id", "title", "description", "catagories", "mainCatagory"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["id", "firstName", "lastName", "email", "password", "createdAt", "modifiedAt", "deletedAt", "roles"],
  CatagoryCreateWithoutPostsInput: ["id", "name", "createdAt", "modifiedAt", "mainCatagoryPosts"],
  CatagoryCreateOrConnectWithoutPostsInput: ["where", "create"],
  PostCreateWithoutCatagoriesInput: ["id", "title", "description", "users", "mainCatagory"],
  PostCreateOrConnectWithoutCatagoriesInput: ["where", "create"],
  CatagoryUpsertWithoutPostsInput: ["update", "create"],
  CatagoryUpdateWithoutPostsInput: ["id", "name", "createdAt", "modifiedAt", "mainCatagoryPosts"],
  PostUpsertWithoutCatagoriesInput: ["update", "create"],
  PostUpdateWithoutCatagoriesInput: ["id", "title", "description", "users", "mainCatagory"],
  RolesAdministratorsCreateManyRoleInput: ["administratorId"],
  RolesAdministratorsUpdateWithoutRoleInput: ["user"],
  PostsUsersCreateManyUserInput: ["postId"],
  RolesAdministratorsCreateManyUserInput: ["roleId"],
  PostsUsersUpdateWithoutUserInput: ["post"],
  RolesAdministratorsUpdateWithoutUserInput: ["role"],
  PostsUsersCreateManyPostInput: ["userId"],
  CatagoriesPostsCreateManyPostInput: ["catagoryId"],
  PostsUsersUpdateWithoutPostInput: ["user"],
  CatagoriesPostsUpdateWithoutPostInput: ["catagory"],
  PostCreateManyMainCatagoryInput: ["id", "title", "description"],
  CatagoriesPostsCreateManyCatagoryInput: ["postId"],
  PostUpdateWithoutMainCatagoryInput: ["id", "title", "description", "users", "catagories"],
  CatagoriesPostsUpdateWithoutCatagoryInput: ["post"]
};
const outputsInfo = {
  AggregateRole: ["_count", "_min", "_max"],
  RoleGroupBy: ["id", "name", "canQueryUsers", "canCrudUsers", "canQueryRoles", "canCrudRoles", "canQueryPosts", "canCrudPosts", "createdAt", "modifiedAt", "deletedAt", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "firstName", "lastName", "email", "password", "createdAt", "modifiedAt", "deletedAt", "_count", "_min", "_max"],
  AggregatePost: ["_count", "_min", "_max"],
  PostGroupBy: ["id", "title", "description", "mainCatagoryId", "_count", "_min", "_max"],
  AggregateCatagory: ["_count", "_min", "_max"],
  CatagoryGroupBy: ["id", "name", "createdAt", "modifiedAt", "_count", "_min", "_max"],
  AggregateRolesAdministrators: ["_count", "_min", "_max"],
  RolesAdministratorsGroupBy: ["roleId", "administratorId", "_count", "_min", "_max"],
  AggregatePostsUsers: ["_count", "_min", "_max"],
  PostsUsersGroupBy: ["postId", "userId", "_count", "_min", "_max"],
  AggregateCatagoriesPosts: ["_count", "_min", "_max"],
  CatagoriesPostsGroupBy: ["catagoryId", "postId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  RoleCountAggregate: ["id", "name", "canQueryUsers", "canCrudUsers", "canQueryRoles", "canCrudRoles", "canQueryPosts", "canCrudPosts", "createdAt", "modifiedAt", "deletedAt", "_all"],
  RoleMinAggregate: ["id", "name", "canQueryUsers", "canCrudUsers", "canQueryRoles", "canCrudRoles", "canQueryPosts", "canCrudPosts", "createdAt", "modifiedAt", "deletedAt"],
  RoleMaxAggregate: ["id", "name", "canQueryUsers", "canCrudUsers", "canQueryRoles", "canCrudRoles", "canQueryPosts", "canCrudPosts", "createdAt", "modifiedAt", "deletedAt"],
  UserCountAggregate: ["id", "firstName", "lastName", "email", "password", "createdAt", "modifiedAt", "deletedAt", "_all"],
  UserMinAggregate: ["id", "firstName", "lastName", "email", "password", "createdAt", "modifiedAt", "deletedAt"],
  UserMaxAggregate: ["id", "firstName", "lastName", "email", "password", "createdAt", "modifiedAt", "deletedAt"],
  PostCountAggregate: ["id", "title", "description", "mainCatagoryId", "_all"],
  PostMinAggregate: ["id", "title", "description", "mainCatagoryId"],
  PostMaxAggregate: ["id", "title", "description", "mainCatagoryId"],
  CatagoryCountAggregate: ["id", "name", "createdAt", "modifiedAt", "_all"],
  CatagoryMinAggregate: ["id", "name", "createdAt", "modifiedAt"],
  CatagoryMaxAggregate: ["id", "name", "createdAt", "modifiedAt"],
  RolesAdministratorsCountAggregate: ["roleId", "administratorId", "_all"],
  RolesAdministratorsMinAggregate: ["roleId", "administratorId"],
  RolesAdministratorsMaxAggregate: ["roleId", "administratorId"],
  PostsUsersCountAggregate: ["postId", "userId", "_all"],
  PostsUsersMinAggregate: ["postId", "userId"],
  PostsUsersMaxAggregate: ["postId", "userId"],
  CatagoriesPostsCountAggregate: ["catagoryId", "postId", "_all"],
  CatagoriesPostsMinAggregate: ["catagoryId", "postId"],
  CatagoriesPostsMaxAggregate: ["catagoryId", "postId"]
};
const argsInfo = {
  FindUniqueRoleArgs: ["where"],
  FindFirstRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateRoleArgs: ["data"],
  CreateManyRoleArgs: ["data", "skipDuplicates"],
  DeleteRoleArgs: ["where"],
  UpdateRoleArgs: ["data", "where"],
  DeleteManyRoleArgs: ["where"],
  UpdateManyRoleArgs: ["data", "where"],
  UpsertRoleArgs: ["where", "create", "update"],
  AggregateRoleArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByRoleArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostArgs: ["data"],
  CreateManyPostArgs: ["data", "skipDuplicates"],
  DeletePostArgs: ["where"],
  UpdatePostArgs: ["data", "where"],
  DeleteManyPostArgs: ["where"],
  UpdateManyPostArgs: ["data", "where"],
  UpsertPostArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCatagoryArgs: ["where"],
  FindFirstCatagoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCatagoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCatagoryArgs: ["data"],
  CreateManyCatagoryArgs: ["data", "skipDuplicates"],
  DeleteCatagoryArgs: ["where"],
  UpdateCatagoryArgs: ["data", "where"],
  DeleteManyCatagoryArgs: ["where"],
  UpdateManyCatagoryArgs: ["data", "where"],
  UpsertCatagoryArgs: ["where", "create", "update"],
  AggregateCatagoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCatagoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueRolesAdministratorsArgs: ["where"],
  FindFirstRolesAdministratorsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRolesAdministratorsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateRolesAdministratorsArgs: ["data"],
  CreateManyRolesAdministratorsArgs: ["data", "skipDuplicates"],
  DeleteRolesAdministratorsArgs: ["where"],
  UpdateRolesAdministratorsArgs: ["data", "where"],
  DeleteManyRolesAdministratorsArgs: ["where"],
  UpdateManyRolesAdministratorsArgs: ["data", "where"],
  UpsertRolesAdministratorsArgs: ["where", "create", "update"],
  AggregateRolesAdministratorsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByRolesAdministratorsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePostsUsersArgs: ["where"],
  FindFirstPostsUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostsUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostsUsersArgs: ["data"],
  CreateManyPostsUsersArgs: ["data", "skipDuplicates"],
  DeletePostsUsersArgs: ["where"],
  UpdatePostsUsersArgs: ["data", "where"],
  DeleteManyPostsUsersArgs: ["where"],
  UpdateManyPostsUsersArgs: ["data", "where"],
  UpsertPostsUsersArgs: ["where", "create", "update"],
  AggregatePostsUsersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostsUsersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCatagoriesPostsArgs: ["where"],
  FindFirstCatagoriesPostsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCatagoriesPostsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCatagoriesPostsArgs: ["data"],
  CreateManyCatagoriesPostsArgs: ["data", "skipDuplicates"],
  DeleteCatagoriesPostsArgs: ["where"],
  UpdateCatagoriesPostsArgs: ["data", "where"],
  DeleteManyCatagoriesPostsArgs: ["where"],
  UpdateManyCatagoriesPostsArgs: ["data", "where"],
  UpsertCatagoriesPostsArgs: ["where", "create", "update"],
  AggregateCatagoriesPostsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCatagoriesPostsArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







