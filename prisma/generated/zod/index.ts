import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','authId','name']);

export const ReviewScalarFieldEnumSchema = z.enum(['id','userId','userCode','message','toCharacterId','fromCharacterId','emotionFlame','createdAt']);

export const UsersOnReviewLikeScalarFieldEnumSchema = z.enum(['reviewId','userId']);

export const UsersOnReviewBadScalarFieldEnumSchema = z.enum(['reviewId','userId']);

export const CharacterScalarFieldEnumSchema = z.enum(['id','name']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().uuid(),
  authId: z.string(),
  name: z.string(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// REVIEW SCHEMA
/////////////////////////////////////////

export const ReviewSchema = z.object({
  id: z.string().uuid(),
  userId: z.string(),
  userCode: z.bigint(),
  message: z.string(),
  toCharacterId: z.number().int(),
  fromCharacterId: z.number().int(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date(),
})

export type Review = z.infer<typeof ReviewSchema>

/////////////////////////////////////////
// USERS ON REVIEW LIKE SCHEMA
/////////////////////////////////////////

export const UsersOnReviewLikeSchema = z.object({
  reviewId: z.string(),
  userId: z.string(),
})

export type UsersOnReviewLike = z.infer<typeof UsersOnReviewLikeSchema>

/////////////////////////////////////////
// USERS ON REVIEW BAD SCHEMA
/////////////////////////////////////////

export const UsersOnReviewBadSchema = z.object({
  reviewId: z.string(),
  userId: z.string(),
})

export type UsersOnReviewBad = z.infer<typeof UsersOnReviewBadSchema>

/////////////////////////////////////////
// CHARACTER SCHEMA
/////////////////////////////////////////

export const CharacterSchema = z.object({
  id: z.number().int(),
  name: z.string(),
})

export type Character = z.infer<typeof CharacterSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  review: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  UsersOnReviewLike: z.union([z.boolean(),z.lazy(() => UsersOnReviewLikeFindManyArgsSchema)]).optional(),
  UsersOnReviewBad: z.union([z.boolean(),z.lazy(() => UsersOnReviewBadFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  review: z.boolean().optional(),
  UsersOnReviewLike: z.boolean().optional(),
  UsersOnReviewBad: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  authId: z.boolean().optional(),
  name: z.boolean().optional(),
  review: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  UsersOnReviewLike: z.union([z.boolean(),z.lazy(() => UsersOnReviewLikeFindManyArgsSchema)]).optional(),
  UsersOnReviewBad: z.union([z.boolean(),z.lazy(() => UsersOnReviewBadFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// REVIEW
//------------------------------------------------------

export const ReviewIncludeSchema: z.ZodType<Prisma.ReviewInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  to: z.union([z.boolean(),z.lazy(() => CharacterArgsSchema)]).optional(),
  from: z.union([z.boolean(),z.lazy(() => CharacterArgsSchema)]).optional(),
  UsersOnReviewLike: z.union([z.boolean(),z.lazy(() => UsersOnReviewLikeFindManyArgsSchema)]).optional(),
  UsersOnReviewBad: z.union([z.boolean(),z.lazy(() => UsersOnReviewBadFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ReviewCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ReviewArgsSchema: z.ZodType<Prisma.ReviewDefaultArgs> = z.object({
  select: z.lazy(() => ReviewSelectSchema).optional(),
  include: z.lazy(() => ReviewIncludeSchema).optional(),
}).strict();

export const ReviewCountOutputTypeArgsSchema: z.ZodType<Prisma.ReviewCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ReviewCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ReviewCountOutputTypeSelectSchema: z.ZodType<Prisma.ReviewCountOutputTypeSelect> = z.object({
  UsersOnReviewLike: z.boolean().optional(),
  UsersOnReviewBad: z.boolean().optional(),
}).strict();

export const ReviewSelectSchema: z.ZodType<Prisma.ReviewSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  userCode: z.boolean().optional(),
  message: z.boolean().optional(),
  toCharacterId: z.boolean().optional(),
  fromCharacterId: z.boolean().optional(),
  emotionFlame: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  to: z.union([z.boolean(),z.lazy(() => CharacterArgsSchema)]).optional(),
  from: z.union([z.boolean(),z.lazy(() => CharacterArgsSchema)]).optional(),
  UsersOnReviewLike: z.union([z.boolean(),z.lazy(() => UsersOnReviewLikeFindManyArgsSchema)]).optional(),
  UsersOnReviewBad: z.union([z.boolean(),z.lazy(() => UsersOnReviewBadFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ReviewCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USERS ON REVIEW LIKE
//------------------------------------------------------

export const UsersOnReviewLikeIncludeSchema: z.ZodType<Prisma.UsersOnReviewLikeInclude> = z.object({
  review: z.union([z.boolean(),z.lazy(() => ReviewArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const UsersOnReviewLikeArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeDefaultArgs> = z.object({
  select: z.lazy(() => UsersOnReviewLikeSelectSchema).optional(),
  include: z.lazy(() => UsersOnReviewLikeIncludeSchema).optional(),
}).strict();

export const UsersOnReviewLikeSelectSchema: z.ZodType<Prisma.UsersOnReviewLikeSelect> = z.object({
  reviewId: z.boolean().optional(),
  userId: z.boolean().optional(),
  review: z.union([z.boolean(),z.lazy(() => ReviewArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// USERS ON REVIEW BAD
//------------------------------------------------------

export const UsersOnReviewBadIncludeSchema: z.ZodType<Prisma.UsersOnReviewBadInclude> = z.object({
  review: z.union([z.boolean(),z.lazy(() => ReviewArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const UsersOnReviewBadArgsSchema: z.ZodType<Prisma.UsersOnReviewBadDefaultArgs> = z.object({
  select: z.lazy(() => UsersOnReviewBadSelectSchema).optional(),
  include: z.lazy(() => UsersOnReviewBadIncludeSchema).optional(),
}).strict();

export const UsersOnReviewBadSelectSchema: z.ZodType<Prisma.UsersOnReviewBadSelect> = z.object({
  reviewId: z.boolean().optional(),
  userId: z.boolean().optional(),
  review: z.union([z.boolean(),z.lazy(() => ReviewArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// CHARACTER
//------------------------------------------------------

export const CharacterIncludeSchema: z.ZodType<Prisma.CharacterInclude> = z.object({
  toReviews: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  fromReviews: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CharacterCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CharacterArgsSchema: z.ZodType<Prisma.CharacterDefaultArgs> = z.object({
  select: z.lazy(() => CharacterSelectSchema).optional(),
  include: z.lazy(() => CharacterIncludeSchema).optional(),
}).strict();

export const CharacterCountOutputTypeArgsSchema: z.ZodType<Prisma.CharacterCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CharacterCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CharacterCountOutputTypeSelectSchema: z.ZodType<Prisma.CharacterCountOutputTypeSelect> = z.object({
  toReviews: z.boolean().optional(),
  fromReviews: z.boolean().optional(),
}).strict();

export const CharacterSelectSchema: z.ZodType<Prisma.CharacterSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  toReviews: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  fromReviews: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CharacterCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  review: z.lazy(() => ReviewListRelationFilterSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeListRelationFilterSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  review: z.lazy(() => ReviewOrderByRelationAggregateInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeOrderByRelationAggregateInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    authId: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    authId: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  authId: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  review: z.lazy(() => ReviewListRelationFilterSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeListRelationFilterSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  authId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ReviewWhereInputSchema: z.ZodType<Prisma.ReviewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReviewWhereInputSchema),z.lazy(() => ReviewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewWhereInputSchema),z.lazy(() => ReviewWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userCode: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  toCharacterId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  fromCharacterId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  emotionFlame: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  to: z.union([ z.lazy(() => CharacterScalarRelationFilterSchema),z.lazy(() => CharacterWhereInputSchema) ]).optional(),
  from: z.union([ z.lazy(() => CharacterScalarRelationFilterSchema),z.lazy(() => CharacterWhereInputSchema) ]).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeListRelationFilterSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadListRelationFilterSchema).optional()
}).strict();

export const ReviewOrderByWithRelationInputSchema: z.ZodType<Prisma.ReviewOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  userCode: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  toCharacterId: z.lazy(() => SortOrderSchema).optional(),
  fromCharacterId: z.lazy(() => SortOrderSchema).optional(),
  emotionFlame: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  to: z.lazy(() => CharacterOrderByWithRelationInputSchema).optional(),
  from: z.lazy(() => CharacterOrderByWithRelationInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeOrderByRelationAggregateInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ReviewWhereUniqueInputSchema: z.ZodType<Prisma.ReviewWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => ReviewWhereInputSchema),z.lazy(() => ReviewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewWhereInputSchema),z.lazy(() => ReviewWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userCode: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  toCharacterId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  fromCharacterId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  emotionFlame: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  to: z.union([ z.lazy(() => CharacterScalarRelationFilterSchema),z.lazy(() => CharacterWhereInputSchema) ]).optional(),
  from: z.union([ z.lazy(() => CharacterScalarRelationFilterSchema),z.lazy(() => CharacterWhereInputSchema) ]).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeListRelationFilterSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadListRelationFilterSchema).optional()
}).strict());

export const ReviewOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReviewOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  userCode: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  toCharacterId: z.lazy(() => SortOrderSchema).optional(),
  fromCharacterId: z.lazy(() => SortOrderSchema).optional(),
  emotionFlame: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReviewCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ReviewAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReviewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReviewMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ReviewSumOrderByAggregateInputSchema).optional()
}).strict();

export const ReviewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReviewScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema),z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema),z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userCode: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  message: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  toCharacterId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  fromCharacterId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  emotionFlame: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UsersOnReviewLikeWhereInputSchema: z.ZodType<Prisma.UsersOnReviewLikeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UsersOnReviewLikeWhereInputSchema),z.lazy(() => UsersOnReviewLikeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersOnReviewLikeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersOnReviewLikeWhereInputSchema),z.lazy(() => UsersOnReviewLikeWhereInputSchema).array() ]).optional(),
  reviewId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  review: z.union([ z.lazy(() => ReviewScalarRelationFilterSchema),z.lazy(() => ReviewWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewLikeOrderByWithRelationInputSchema: z.ZodType<Prisma.UsersOnReviewLikeOrderByWithRelationInput> = z.object({
  reviewId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  review: z.lazy(() => ReviewOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const UsersOnReviewLikeWhereUniqueInputSchema: z.ZodType<Prisma.UsersOnReviewLikeWhereUniqueInput> = z.object({
  reviewId_userId: z.lazy(() => UsersOnReviewLikeReviewIdUserIdCompoundUniqueInputSchema)
})
.and(z.object({
  reviewId_userId: z.lazy(() => UsersOnReviewLikeReviewIdUserIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => UsersOnReviewLikeWhereInputSchema),z.lazy(() => UsersOnReviewLikeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersOnReviewLikeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersOnReviewLikeWhereInputSchema),z.lazy(() => UsersOnReviewLikeWhereInputSchema).array() ]).optional(),
  reviewId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  review: z.union([ z.lazy(() => ReviewScalarRelationFilterSchema),z.lazy(() => ReviewWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const UsersOnReviewLikeOrderByWithAggregationInputSchema: z.ZodType<Prisma.UsersOnReviewLikeOrderByWithAggregationInput> = z.object({
  reviewId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UsersOnReviewLikeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UsersOnReviewLikeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UsersOnReviewLikeMinOrderByAggregateInputSchema).optional()
}).strict();

export const UsersOnReviewLikeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UsersOnReviewLikeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UsersOnReviewLikeScalarWhereWithAggregatesInputSchema),z.lazy(() => UsersOnReviewLikeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersOnReviewLikeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersOnReviewLikeScalarWhereWithAggregatesInputSchema),z.lazy(() => UsersOnReviewLikeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  reviewId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UsersOnReviewBadWhereInputSchema: z.ZodType<Prisma.UsersOnReviewBadWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UsersOnReviewBadWhereInputSchema),z.lazy(() => UsersOnReviewBadWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersOnReviewBadWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersOnReviewBadWhereInputSchema),z.lazy(() => UsersOnReviewBadWhereInputSchema).array() ]).optional(),
  reviewId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  review: z.union([ z.lazy(() => ReviewScalarRelationFilterSchema),z.lazy(() => ReviewWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewBadOrderByWithRelationInputSchema: z.ZodType<Prisma.UsersOnReviewBadOrderByWithRelationInput> = z.object({
  reviewId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  review: z.lazy(() => ReviewOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const UsersOnReviewBadWhereUniqueInputSchema: z.ZodType<Prisma.UsersOnReviewBadWhereUniqueInput> = z.object({
  reviewId_userId: z.lazy(() => UsersOnReviewBadReviewIdUserIdCompoundUniqueInputSchema)
})
.and(z.object({
  reviewId_userId: z.lazy(() => UsersOnReviewBadReviewIdUserIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => UsersOnReviewBadWhereInputSchema),z.lazy(() => UsersOnReviewBadWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersOnReviewBadWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersOnReviewBadWhereInputSchema),z.lazy(() => UsersOnReviewBadWhereInputSchema).array() ]).optional(),
  reviewId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  review: z.union([ z.lazy(() => ReviewScalarRelationFilterSchema),z.lazy(() => ReviewWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const UsersOnReviewBadOrderByWithAggregationInputSchema: z.ZodType<Prisma.UsersOnReviewBadOrderByWithAggregationInput> = z.object({
  reviewId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UsersOnReviewBadCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UsersOnReviewBadMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UsersOnReviewBadMinOrderByAggregateInputSchema).optional()
}).strict();

export const UsersOnReviewBadScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UsersOnReviewBadScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UsersOnReviewBadScalarWhereWithAggregatesInputSchema),z.lazy(() => UsersOnReviewBadScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersOnReviewBadScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersOnReviewBadScalarWhereWithAggregatesInputSchema),z.lazy(() => UsersOnReviewBadScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  reviewId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const CharacterWhereInputSchema: z.ZodType<Prisma.CharacterWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CharacterWhereInputSchema),z.lazy(() => CharacterWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CharacterWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CharacterWhereInputSchema),z.lazy(() => CharacterWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  toReviews: z.lazy(() => ReviewListRelationFilterSchema).optional(),
  fromReviews: z.lazy(() => ReviewListRelationFilterSchema).optional()
}).strict();

export const CharacterOrderByWithRelationInputSchema: z.ZodType<Prisma.CharacterOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  toReviews: z.lazy(() => ReviewOrderByRelationAggregateInputSchema).optional(),
  fromReviews: z.lazy(() => ReviewOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CharacterWhereUniqueInputSchema: z.ZodType<Prisma.CharacterWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => CharacterWhereInputSchema),z.lazy(() => CharacterWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CharacterWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CharacterWhereInputSchema),z.lazy(() => CharacterWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  toReviews: z.lazy(() => ReviewListRelationFilterSchema).optional(),
  fromReviews: z.lazy(() => ReviewListRelationFilterSchema).optional()
}).strict());

export const CharacterOrderByWithAggregationInputSchema: z.ZodType<Prisma.CharacterOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CharacterCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CharacterAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CharacterMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CharacterMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CharacterSumOrderByAggregateInputSchema).optional()
}).strict();

export const CharacterScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CharacterScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CharacterScalarWhereWithAggregatesInputSchema),z.lazy(() => CharacterScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CharacterScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CharacterScalarWhereWithAggregatesInputSchema),z.lazy(() => CharacterScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().uuid().optional(),
  authId: z.string(),
  name: z.string(),
  review: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeCreateNestedManyWithoutUserInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  authId: z.string(),
  name: z.string(),
  review: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUpdateManyWithoutUserNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  authId: z.string(),
  name: z.string()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReviewCreateInputSchema: z.ZodType<Prisma.ReviewCreateInput> = z.object({
  id: z.string().uuid().optional(),
  userCode: z.bigint(),
  message: z.string(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewInputSchema),
  to: z.lazy(() => CharacterCreateNestedOneWithoutToReviewsInputSchema),
  from: z.lazy(() => CharacterCreateNestedOneWithoutFromReviewsInputSchema),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeCreateNestedManyWithoutReviewInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadCreateNestedManyWithoutReviewInputSchema).optional()
}).strict();

export const ReviewUncheckedCreateInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  userId: z.string(),
  userCode: z.bigint(),
  message: z.string(),
  toCharacterId: z.number().int(),
  fromCharacterId: z.number().int(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedCreateNestedManyWithoutReviewInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedCreateNestedManyWithoutReviewInputSchema).optional()
}).strict();

export const ReviewUpdateInputSchema: z.ZodType<Prisma.ReviewUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutReviewNestedInputSchema).optional(),
  to: z.lazy(() => CharacterUpdateOneRequiredWithoutToReviewsNestedInputSchema).optional(),
  from: z.lazy(() => CharacterUpdateOneRequiredWithoutFromReviewsNestedInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUpdateManyWithoutReviewNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUpdateManyWithoutReviewNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  toCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  fromCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedUpdateManyWithoutReviewNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedUpdateManyWithoutReviewNestedInputSchema).optional()
}).strict();

export const ReviewCreateManyInputSchema: z.ZodType<Prisma.ReviewCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  userId: z.string(),
  userCode: z.bigint(),
  message: z.string(),
  toCharacterId: z.number().int(),
  fromCharacterId: z.number().int(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ReviewUpdateManyMutationInputSchema: z.ZodType<Prisma.ReviewUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReviewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  toCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  fromCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewLikeCreateInputSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateInput> = z.object({
  review: z.lazy(() => ReviewCreateNestedOneWithoutUsersOnReviewLikeInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutUsersOnReviewLikeInputSchema)
}).strict();

export const UsersOnReviewLikeUncheckedCreateInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUncheckedCreateInput> = z.object({
  reviewId: z.string(),
  userId: z.string()
}).strict();

export const UsersOnReviewLikeUpdateInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUpdateInput> = z.object({
  review: z.lazy(() => ReviewUpdateOneRequiredWithoutUsersOnReviewLikeNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutUsersOnReviewLikeNestedInputSchema).optional()
}).strict();

export const UsersOnReviewLikeUncheckedUpdateInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUncheckedUpdateInput> = z.object({
  reviewId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewLikeCreateManyInputSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateManyInput> = z.object({
  reviewId: z.string(),
  userId: z.string()
}).strict();

export const UsersOnReviewLikeUpdateManyMutationInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUpdateManyMutationInput> = z.object({
}).strict();

export const UsersOnReviewLikeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUncheckedUpdateManyInput> = z.object({
  reviewId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewBadCreateInputSchema: z.ZodType<Prisma.UsersOnReviewBadCreateInput> = z.object({
  review: z.lazy(() => ReviewCreateNestedOneWithoutUsersOnReviewBadInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutUsersOnReviewBadInputSchema)
}).strict();

export const UsersOnReviewBadUncheckedCreateInputSchema: z.ZodType<Prisma.UsersOnReviewBadUncheckedCreateInput> = z.object({
  reviewId: z.string(),
  userId: z.string()
}).strict();

export const UsersOnReviewBadUpdateInputSchema: z.ZodType<Prisma.UsersOnReviewBadUpdateInput> = z.object({
  review: z.lazy(() => ReviewUpdateOneRequiredWithoutUsersOnReviewBadNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutUsersOnReviewBadNestedInputSchema).optional()
}).strict();

export const UsersOnReviewBadUncheckedUpdateInputSchema: z.ZodType<Prisma.UsersOnReviewBadUncheckedUpdateInput> = z.object({
  reviewId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewBadCreateManyInputSchema: z.ZodType<Prisma.UsersOnReviewBadCreateManyInput> = z.object({
  reviewId: z.string(),
  userId: z.string()
}).strict();

export const UsersOnReviewBadUpdateManyMutationInputSchema: z.ZodType<Prisma.UsersOnReviewBadUpdateManyMutationInput> = z.object({
}).strict();

export const UsersOnReviewBadUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UsersOnReviewBadUncheckedUpdateManyInput> = z.object({
  reviewId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CharacterCreateInputSchema: z.ZodType<Prisma.CharacterCreateInput> = z.object({
  id: z.number().int(),
  name: z.string(),
  toReviews: z.lazy(() => ReviewCreateNestedManyWithoutToInputSchema).optional(),
  fromReviews: z.lazy(() => ReviewCreateNestedManyWithoutFromInputSchema).optional()
}).strict();

export const CharacterUncheckedCreateInputSchema: z.ZodType<Prisma.CharacterUncheckedCreateInput> = z.object({
  id: z.number().int(),
  name: z.string(),
  toReviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutToInputSchema).optional(),
  fromReviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutFromInputSchema).optional()
}).strict();

export const CharacterUpdateInputSchema: z.ZodType<Prisma.CharacterUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  toReviews: z.lazy(() => ReviewUpdateManyWithoutToNestedInputSchema).optional(),
  fromReviews: z.lazy(() => ReviewUpdateManyWithoutFromNestedInputSchema).optional()
}).strict();

export const CharacterUncheckedUpdateInputSchema: z.ZodType<Prisma.CharacterUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  toReviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutToNestedInputSchema).optional(),
  fromReviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutFromNestedInputSchema).optional()
}).strict();

export const CharacterCreateManyInputSchema: z.ZodType<Prisma.CharacterCreateManyInput> = z.object({
  id: z.number().int(),
  name: z.string()
}).strict();

export const CharacterUpdateManyMutationInputSchema: z.ZodType<Prisma.CharacterUpdateManyMutationInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CharacterUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CharacterUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const ReviewListRelationFilterSchema: z.ZodType<Prisma.ReviewListRelationFilter> = z.object({
  every: z.lazy(() => ReviewWhereInputSchema).optional(),
  some: z.lazy(() => ReviewWhereInputSchema).optional(),
  none: z.lazy(() => ReviewWhereInputSchema).optional()
}).strict();

export const UsersOnReviewLikeListRelationFilterSchema: z.ZodType<Prisma.UsersOnReviewLikeListRelationFilter> = z.object({
  every: z.lazy(() => UsersOnReviewLikeWhereInputSchema).optional(),
  some: z.lazy(() => UsersOnReviewLikeWhereInputSchema).optional(),
  none: z.lazy(() => UsersOnReviewLikeWhereInputSchema).optional()
}).strict();

export const UsersOnReviewBadListRelationFilterSchema: z.ZodType<Prisma.UsersOnReviewBadListRelationFilter> = z.object({
  every: z.lazy(() => UsersOnReviewBadWhereInputSchema).optional(),
  some: z.lazy(() => UsersOnReviewBadWhereInputSchema).optional(),
  none: z.lazy(() => UsersOnReviewBadWhereInputSchema).optional()
}).strict();

export const ReviewOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReviewOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnReviewLikeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UsersOnReviewLikeOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnReviewBadOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UsersOnReviewBadOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const BigIntFilterSchema: z.ZodType<Prisma.BigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const CharacterScalarRelationFilterSchema: z.ZodType<Prisma.CharacterScalarRelationFilter> = z.object({
  is: z.lazy(() => CharacterWhereInputSchema).optional(),
  isNot: z.lazy(() => CharacterWhereInputSchema).optional()
}).strict();

export const ReviewCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  userCode: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  toCharacterId: z.lazy(() => SortOrderSchema).optional(),
  fromCharacterId: z.lazy(() => SortOrderSchema).optional(),
  emotionFlame: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewAvgOrderByAggregateInput> = z.object({
  userCode: z.lazy(() => SortOrderSchema).optional(),
  toCharacterId: z.lazy(() => SortOrderSchema).optional(),
  fromCharacterId: z.lazy(() => SortOrderSchema).optional(),
  emotionFlame: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  userCode: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  toCharacterId: z.lazy(() => SortOrderSchema).optional(),
  fromCharacterId: z.lazy(() => SortOrderSchema).optional(),
  emotionFlame: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  userCode: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  toCharacterId: z.lazy(() => SortOrderSchema).optional(),
  fromCharacterId: z.lazy(() => SortOrderSchema).optional(),
  emotionFlame: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewSumOrderByAggregateInput> = z.object({
  userCode: z.lazy(() => SortOrderSchema).optional(),
  toCharacterId: z.lazy(() => SortOrderSchema).optional(),
  fromCharacterId: z.lazy(() => SortOrderSchema).optional(),
  emotionFlame: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BigIntWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const ReviewScalarRelationFilterSchema: z.ZodType<Prisma.ReviewScalarRelationFilter> = z.object({
  is: z.lazy(() => ReviewWhereInputSchema).optional(),
  isNot: z.lazy(() => ReviewWhereInputSchema).optional()
}).strict();

export const UsersOnReviewLikeReviewIdUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.UsersOnReviewLikeReviewIdUserIdCompoundUniqueInput> = z.object({
  reviewId: z.string(),
  userId: z.string()
}).strict();

export const UsersOnReviewLikeCountOrderByAggregateInputSchema: z.ZodType<Prisma.UsersOnReviewLikeCountOrderByAggregateInput> = z.object({
  reviewId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnReviewLikeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UsersOnReviewLikeMaxOrderByAggregateInput> = z.object({
  reviewId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnReviewLikeMinOrderByAggregateInputSchema: z.ZodType<Prisma.UsersOnReviewLikeMinOrderByAggregateInput> = z.object({
  reviewId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnReviewBadReviewIdUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.UsersOnReviewBadReviewIdUserIdCompoundUniqueInput> = z.object({
  reviewId: z.string(),
  userId: z.string()
}).strict();

export const UsersOnReviewBadCountOrderByAggregateInputSchema: z.ZodType<Prisma.UsersOnReviewBadCountOrderByAggregateInput> = z.object({
  reviewId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnReviewBadMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UsersOnReviewBadMaxOrderByAggregateInput> = z.object({
  reviewId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsersOnReviewBadMinOrderByAggregateInputSchema: z.ZodType<Prisma.UsersOnReviewBadMinOrderByAggregateInput> = z.object({
  reviewId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CharacterCountOrderByAggregateInputSchema: z.ZodType<Prisma.CharacterCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CharacterAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CharacterAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CharacterMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CharacterMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CharacterMinOrderByAggregateInputSchema: z.ZodType<Prisma.CharacterMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CharacterSumOrderByAggregateInputSchema: z.ZodType<Prisma.CharacterSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ReviewCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewCreateWithoutUserInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UsersOnReviewLikeCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewLikeCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeCreateWithoutUserInputSchema).array(),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewLikeCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UsersOnReviewBadCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewBadCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewBadCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadCreateWithoutUserInputSchema).array(),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewBadCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReviewUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewCreateWithoutUserInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UsersOnReviewLikeUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewLikeCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeCreateWithoutUserInputSchema).array(),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewLikeCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UsersOnReviewBadUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewBadUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewBadCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadCreateWithoutUserInputSchema).array(),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewBadCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const ReviewUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewCreateWithoutUserInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReviewUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReviewUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ReviewUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UsersOnReviewLikeUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewLikeCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeCreateWithoutUserInputSchema).array(),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsersOnReviewLikeUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewLikeCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsersOnReviewLikeUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsersOnReviewLikeUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema),z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UsersOnReviewBadUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UsersOnReviewBadUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewBadCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadCreateWithoutUserInputSchema).array(),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsersOnReviewBadUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewBadCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsersOnReviewBadUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsersOnReviewBadUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsersOnReviewBadScalarWhereInputSchema),z.lazy(() => UsersOnReviewBadScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReviewUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewCreateWithoutUserInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReviewUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReviewUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ReviewUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UsersOnReviewLikeUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewLikeCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeCreateWithoutUserInputSchema).array(),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsersOnReviewLikeUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewLikeCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsersOnReviewLikeUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsersOnReviewLikeUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema),z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UsersOnReviewBadUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UsersOnReviewBadUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewBadCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadCreateWithoutUserInputSchema).array(),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsersOnReviewBadUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewBadCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsersOnReviewBadUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsersOnReviewBadUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsersOnReviewBadScalarWhereInputSchema),z.lazy(() => UsersOnReviewBadScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutReviewInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutReviewInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReviewInputSchema),z.lazy(() => UserUncheckedCreateWithoutReviewInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReviewInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CharacterCreateNestedOneWithoutToReviewsInputSchema: z.ZodType<Prisma.CharacterCreateNestedOneWithoutToReviewsInput> = z.object({
  create: z.union([ z.lazy(() => CharacterCreateWithoutToReviewsInputSchema),z.lazy(() => CharacterUncheckedCreateWithoutToReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutToReviewsInputSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputSchema).optional()
}).strict();

export const CharacterCreateNestedOneWithoutFromReviewsInputSchema: z.ZodType<Prisma.CharacterCreateNestedOneWithoutFromReviewsInput> = z.object({
  create: z.union([ z.lazy(() => CharacterCreateWithoutFromReviewsInputSchema),z.lazy(() => CharacterUncheckedCreateWithoutFromReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutFromReviewsInputSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputSchema).optional()
}).strict();

export const UsersOnReviewLikeCreateNestedManyWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateNestedManyWithoutReviewInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewLikeCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeCreateWithoutReviewInputSchema).array(),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutReviewInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutReviewInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewLikeCreateManyReviewInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UsersOnReviewBadCreateNestedManyWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewBadCreateNestedManyWithoutReviewInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewBadCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadCreateWithoutReviewInputSchema).array(),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutReviewInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutReviewInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewBadCreateManyReviewInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UsersOnReviewLikeUncheckedCreateNestedManyWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUncheckedCreateNestedManyWithoutReviewInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewLikeCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeCreateWithoutReviewInputSchema).array(),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutReviewInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutReviewInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewLikeCreateManyReviewInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UsersOnReviewBadUncheckedCreateNestedManyWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewBadUncheckedCreateNestedManyWithoutReviewInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewBadCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadCreateWithoutReviewInputSchema).array(),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutReviewInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutReviewInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewBadCreateManyReviewInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BigIntFieldUpdateOperationsInput> = z.object({
  set: z.bigint().optional(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const UserUpdateOneRequiredWithoutReviewNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutReviewNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReviewInputSchema),z.lazy(() => UserUncheckedCreateWithoutReviewInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReviewInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutReviewInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutReviewInputSchema),z.lazy(() => UserUpdateWithoutReviewInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReviewInputSchema) ]).optional(),
}).strict();

export const CharacterUpdateOneRequiredWithoutToReviewsNestedInputSchema: z.ZodType<Prisma.CharacterUpdateOneRequiredWithoutToReviewsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CharacterCreateWithoutToReviewsInputSchema),z.lazy(() => CharacterUncheckedCreateWithoutToReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutToReviewsInputSchema).optional(),
  upsert: z.lazy(() => CharacterUpsertWithoutToReviewsInputSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CharacterUpdateToOneWithWhereWithoutToReviewsInputSchema),z.lazy(() => CharacterUpdateWithoutToReviewsInputSchema),z.lazy(() => CharacterUncheckedUpdateWithoutToReviewsInputSchema) ]).optional(),
}).strict();

export const CharacterUpdateOneRequiredWithoutFromReviewsNestedInputSchema: z.ZodType<Prisma.CharacterUpdateOneRequiredWithoutFromReviewsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CharacterCreateWithoutFromReviewsInputSchema),z.lazy(() => CharacterUncheckedCreateWithoutFromReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutFromReviewsInputSchema).optional(),
  upsert: z.lazy(() => CharacterUpsertWithoutFromReviewsInputSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CharacterUpdateToOneWithWhereWithoutFromReviewsInputSchema),z.lazy(() => CharacterUpdateWithoutFromReviewsInputSchema),z.lazy(() => CharacterUncheckedUpdateWithoutFromReviewsInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewLikeUpdateManyWithoutReviewNestedInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUpdateManyWithoutReviewNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewLikeCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeCreateWithoutReviewInputSchema).array(),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutReviewInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutReviewInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsersOnReviewLikeUpsertWithWhereUniqueWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeUpsertWithWhereUniqueWithoutReviewInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewLikeCreateManyReviewInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsersOnReviewLikeUpdateWithWhereUniqueWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeUpdateWithWhereUniqueWithoutReviewInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsersOnReviewLikeUpdateManyWithWhereWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeUpdateManyWithWhereWithoutReviewInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema),z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UsersOnReviewBadUpdateManyWithoutReviewNestedInputSchema: z.ZodType<Prisma.UsersOnReviewBadUpdateManyWithoutReviewNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewBadCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadCreateWithoutReviewInputSchema).array(),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutReviewInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutReviewInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsersOnReviewBadUpsertWithWhereUniqueWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadUpsertWithWhereUniqueWithoutReviewInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewBadCreateManyReviewInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsersOnReviewBadUpdateWithWhereUniqueWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadUpdateWithWhereUniqueWithoutReviewInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsersOnReviewBadUpdateManyWithWhereWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadUpdateManyWithWhereWithoutReviewInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsersOnReviewBadScalarWhereInputSchema),z.lazy(() => UsersOnReviewBadScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UsersOnReviewLikeUncheckedUpdateManyWithoutReviewNestedInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUncheckedUpdateManyWithoutReviewNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewLikeCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeCreateWithoutReviewInputSchema).array(),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutReviewInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeCreateOrConnectWithoutReviewInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsersOnReviewLikeUpsertWithWhereUniqueWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeUpsertWithWhereUniqueWithoutReviewInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewLikeCreateManyReviewInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsersOnReviewLikeUpdateWithWhereUniqueWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeUpdateWithWhereUniqueWithoutReviewInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsersOnReviewLikeUpdateManyWithWhereWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeUpdateManyWithWhereWithoutReviewInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema),z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UsersOnReviewBadUncheckedUpdateManyWithoutReviewNestedInputSchema: z.ZodType<Prisma.UsersOnReviewBadUncheckedUpdateManyWithoutReviewNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsersOnReviewBadCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadCreateWithoutReviewInputSchema).array(),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutReviewInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadCreateOrConnectWithoutReviewInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsersOnReviewBadUpsertWithWhereUniqueWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadUpsertWithWhereUniqueWithoutReviewInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsersOnReviewBadCreateManyReviewInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsersOnReviewBadUpdateWithWhereUniqueWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadUpdateWithWhereUniqueWithoutReviewInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsersOnReviewBadUpdateManyWithWhereWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadUpdateManyWithWhereWithoutReviewInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsersOnReviewBadScalarWhereInputSchema),z.lazy(() => UsersOnReviewBadScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReviewCreateNestedOneWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.ReviewCreateNestedOneWithoutUsersOnReviewLikeInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUsersOnReviewLikeInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUsersOnReviewLikeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReviewCreateOrConnectWithoutUsersOnReviewLikeInputSchema).optional(),
  connect: z.lazy(() => ReviewWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUsersOnReviewLikeInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUsersOnReviewLikeInputSchema),z.lazy(() => UserUncheckedCreateWithoutUsersOnReviewLikeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUsersOnReviewLikeInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ReviewUpdateOneRequiredWithoutUsersOnReviewLikeNestedInputSchema: z.ZodType<Prisma.ReviewUpdateOneRequiredWithoutUsersOnReviewLikeNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUsersOnReviewLikeInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUsersOnReviewLikeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReviewCreateOrConnectWithoutUsersOnReviewLikeInputSchema).optional(),
  upsert: z.lazy(() => ReviewUpsertWithoutUsersOnReviewLikeInputSchema).optional(),
  connect: z.lazy(() => ReviewWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateToOneWithWhereWithoutUsersOnReviewLikeInputSchema),z.lazy(() => ReviewUpdateWithoutUsersOnReviewLikeInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutUsersOnReviewLikeInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutUsersOnReviewLikeNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUsersOnReviewLikeNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUsersOnReviewLikeInputSchema),z.lazy(() => UserUncheckedCreateWithoutUsersOnReviewLikeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUsersOnReviewLikeInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUsersOnReviewLikeInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUsersOnReviewLikeInputSchema),z.lazy(() => UserUpdateWithoutUsersOnReviewLikeInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUsersOnReviewLikeInputSchema) ]).optional(),
}).strict();

export const ReviewCreateNestedOneWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.ReviewCreateNestedOneWithoutUsersOnReviewBadInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUsersOnReviewBadInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUsersOnReviewBadInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReviewCreateOrConnectWithoutUsersOnReviewBadInputSchema).optional(),
  connect: z.lazy(() => ReviewWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUsersOnReviewBadInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUsersOnReviewBadInputSchema),z.lazy(() => UserUncheckedCreateWithoutUsersOnReviewBadInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUsersOnReviewBadInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ReviewUpdateOneRequiredWithoutUsersOnReviewBadNestedInputSchema: z.ZodType<Prisma.ReviewUpdateOneRequiredWithoutUsersOnReviewBadNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUsersOnReviewBadInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUsersOnReviewBadInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReviewCreateOrConnectWithoutUsersOnReviewBadInputSchema).optional(),
  upsert: z.lazy(() => ReviewUpsertWithoutUsersOnReviewBadInputSchema).optional(),
  connect: z.lazy(() => ReviewWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateToOneWithWhereWithoutUsersOnReviewBadInputSchema),z.lazy(() => ReviewUpdateWithoutUsersOnReviewBadInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutUsersOnReviewBadInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutUsersOnReviewBadNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUsersOnReviewBadNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUsersOnReviewBadInputSchema),z.lazy(() => UserUncheckedCreateWithoutUsersOnReviewBadInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUsersOnReviewBadInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUsersOnReviewBadInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUsersOnReviewBadInputSchema),z.lazy(() => UserUpdateWithoutUsersOnReviewBadInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUsersOnReviewBadInputSchema) ]).optional(),
}).strict();

export const ReviewCreateNestedManyWithoutToInputSchema: z.ZodType<Prisma.ReviewCreateNestedManyWithoutToInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutToInputSchema),z.lazy(() => ReviewCreateWithoutToInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutToInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutToInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutToInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutToInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyToInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReviewCreateNestedManyWithoutFromInputSchema: z.ZodType<Prisma.ReviewCreateNestedManyWithoutFromInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutFromInputSchema),z.lazy(() => ReviewCreateWithoutFromInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutFromInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutFromInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutFromInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutFromInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyFromInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReviewUncheckedCreateNestedManyWithoutToInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutToInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutToInputSchema),z.lazy(() => ReviewCreateWithoutToInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutToInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutToInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutToInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutToInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyToInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReviewUncheckedCreateNestedManyWithoutFromInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutFromInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutFromInputSchema),z.lazy(() => ReviewCreateWithoutFromInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutFromInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutFromInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutFromInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutFromInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyFromInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReviewUpdateManyWithoutToNestedInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithoutToNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutToInputSchema),z.lazy(() => ReviewCreateWithoutToInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutToInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutToInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutToInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutToInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewUpsertWithWhereUniqueWithoutToInputSchema),z.lazy(() => ReviewUpsertWithWhereUniqueWithoutToInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyToInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateWithWhereUniqueWithoutToInputSchema),z.lazy(() => ReviewUpdateWithWhereUniqueWithoutToInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewUpdateManyWithWhereWithoutToInputSchema),z.lazy(() => ReviewUpdateManyWithWhereWithoutToInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReviewUpdateManyWithoutFromNestedInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithoutFromNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutFromInputSchema),z.lazy(() => ReviewCreateWithoutFromInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutFromInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutFromInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutFromInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutFromInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewUpsertWithWhereUniqueWithoutFromInputSchema),z.lazy(() => ReviewUpsertWithWhereUniqueWithoutFromInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyFromInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateWithWhereUniqueWithoutFromInputSchema),z.lazy(() => ReviewUpdateWithWhereUniqueWithoutFromInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewUpdateManyWithWhereWithoutFromInputSchema),z.lazy(() => ReviewUpdateManyWithWhereWithoutFromInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReviewUncheckedUpdateManyWithoutToNestedInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutToNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutToInputSchema),z.lazy(() => ReviewCreateWithoutToInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutToInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutToInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutToInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutToInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewUpsertWithWhereUniqueWithoutToInputSchema),z.lazy(() => ReviewUpsertWithWhereUniqueWithoutToInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyToInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateWithWhereUniqueWithoutToInputSchema),z.lazy(() => ReviewUpdateWithWhereUniqueWithoutToInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewUpdateManyWithWhereWithoutToInputSchema),z.lazy(() => ReviewUpdateManyWithWhereWithoutToInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReviewUncheckedUpdateManyWithoutFromNestedInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutFromNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutFromInputSchema),z.lazy(() => ReviewCreateWithoutFromInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutFromInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutFromInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutFromInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutFromInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewUpsertWithWhereUniqueWithoutFromInputSchema),z.lazy(() => ReviewUpsertWithWhereUniqueWithoutFromInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyFromInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateWithWhereUniqueWithoutFromInputSchema),z.lazy(() => ReviewUpdateWithWhereUniqueWithoutFromInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewUpdateManyWithWhereWithoutFromInputSchema),z.lazy(() => ReviewUpdateManyWithWhereWithoutFromInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedBigIntFilterSchema: z.ZodType<Prisma.NestedBigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedBigIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const ReviewCreateWithoutUserInputSchema: z.ZodType<Prisma.ReviewCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  userCode: z.bigint(),
  message: z.string(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional(),
  to: z.lazy(() => CharacterCreateNestedOneWithoutToReviewsInputSchema),
  from: z.lazy(() => CharacterCreateNestedOneWithoutFromReviewsInputSchema),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeCreateNestedManyWithoutReviewInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadCreateNestedManyWithoutReviewInputSchema).optional()
}).strict();

export const ReviewUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  userCode: z.bigint(),
  message: z.string(),
  toCharacterId: z.number().int(),
  fromCharacterId: z.number().int(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedCreateNestedManyWithoutReviewInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedCreateNestedManyWithoutReviewInputSchema).optional()
}).strict();

export const ReviewCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ReviewCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ReviewCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReviewCreateManyUserInputSchema),z.lazy(() => ReviewCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UsersOnReviewLikeCreateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateWithoutUserInput> = z.object({
  review: z.lazy(() => ReviewCreateNestedOneWithoutUsersOnReviewLikeInputSchema)
}).strict();

export const UsersOnReviewLikeUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUncheckedCreateWithoutUserInput> = z.object({
  reviewId: z.string()
}).strict();

export const UsersOnReviewLikeCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersOnReviewLikeCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UsersOnReviewLikeCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UsersOnReviewLikeCreateManyUserInputSchema),z.lazy(() => UsersOnReviewLikeCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UsersOnReviewBadCreateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewBadCreateWithoutUserInput> = z.object({
  review: z.lazy(() => ReviewCreateNestedOneWithoutUsersOnReviewBadInputSchema)
}).strict();

export const UsersOnReviewBadUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewBadUncheckedCreateWithoutUserInput> = z.object({
  reviewId: z.string()
}).strict();

export const UsersOnReviewBadCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewBadCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersOnReviewBadCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UsersOnReviewBadCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UsersOnReviewBadCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UsersOnReviewBadCreateManyUserInputSchema),z.lazy(() => UsersOnReviewBadCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ReviewUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReviewUpdateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ReviewUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReviewUpdateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const ReviewUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ReviewScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReviewUpdateManyMutationInputSchema),z.lazy(() => ReviewUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const ReviewScalarWhereInputSchema: z.ZodType<Prisma.ReviewScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userCode: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  toCharacterId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  fromCharacterId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  emotionFlame: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UsersOnReviewLikeUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UsersOnReviewLikeUpdateWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UsersOnReviewLikeCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UsersOnReviewLikeUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UsersOnReviewLikeUpdateWithoutUserInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const UsersOnReviewLikeUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UsersOnReviewLikeUpdateManyMutationInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const UsersOnReviewLikeScalarWhereInputSchema: z.ZodType<Prisma.UsersOnReviewLikeScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema),z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema),z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema).array() ]).optional(),
  reviewId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UsersOnReviewBadUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewBadUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UsersOnReviewBadUpdateWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UsersOnReviewBadCreateWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const UsersOnReviewBadUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewBadUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UsersOnReviewBadUpdateWithoutUserInputSchema),z.lazy(() => UsersOnReviewBadUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const UsersOnReviewBadUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewBadUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => UsersOnReviewBadScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UsersOnReviewBadUpdateManyMutationInputSchema),z.lazy(() => UsersOnReviewBadUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const UsersOnReviewBadScalarWhereInputSchema: z.ZodType<Prisma.UsersOnReviewBadScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UsersOnReviewBadScalarWhereInputSchema),z.lazy(() => UsersOnReviewBadScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsersOnReviewBadScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsersOnReviewBadScalarWhereInputSchema),z.lazy(() => UsersOnReviewBadScalarWhereInputSchema).array() ]).optional(),
  reviewId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateWithoutReviewInputSchema: z.ZodType<Prisma.UserCreateWithoutReviewInput> = z.object({
  id: z.string().uuid().optional(),
  authId: z.string(),
  name: z.string(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeCreateNestedManyWithoutUserInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutReviewInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutReviewInput> = z.object({
  id: z.string().uuid().optional(),
  authId: z.string(),
  name: z.string(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutReviewInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutReviewInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutReviewInputSchema),z.lazy(() => UserUncheckedCreateWithoutReviewInputSchema) ]),
}).strict();

export const CharacterCreateWithoutToReviewsInputSchema: z.ZodType<Prisma.CharacterCreateWithoutToReviewsInput> = z.object({
  id: z.number().int(),
  name: z.string(),
  fromReviews: z.lazy(() => ReviewCreateNestedManyWithoutFromInputSchema).optional()
}).strict();

export const CharacterUncheckedCreateWithoutToReviewsInputSchema: z.ZodType<Prisma.CharacterUncheckedCreateWithoutToReviewsInput> = z.object({
  id: z.number().int(),
  name: z.string(),
  fromReviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutFromInputSchema).optional()
}).strict();

export const CharacterCreateOrConnectWithoutToReviewsInputSchema: z.ZodType<Prisma.CharacterCreateOrConnectWithoutToReviewsInput> = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CharacterCreateWithoutToReviewsInputSchema),z.lazy(() => CharacterUncheckedCreateWithoutToReviewsInputSchema) ]),
}).strict();

export const CharacterCreateWithoutFromReviewsInputSchema: z.ZodType<Prisma.CharacterCreateWithoutFromReviewsInput> = z.object({
  id: z.number().int(),
  name: z.string(),
  toReviews: z.lazy(() => ReviewCreateNestedManyWithoutToInputSchema).optional()
}).strict();

export const CharacterUncheckedCreateWithoutFromReviewsInputSchema: z.ZodType<Prisma.CharacterUncheckedCreateWithoutFromReviewsInput> = z.object({
  id: z.number().int(),
  name: z.string(),
  toReviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutToInputSchema).optional()
}).strict();

export const CharacterCreateOrConnectWithoutFromReviewsInputSchema: z.ZodType<Prisma.CharacterCreateOrConnectWithoutFromReviewsInput> = z.object({
  where: z.lazy(() => CharacterWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CharacterCreateWithoutFromReviewsInputSchema),z.lazy(() => CharacterUncheckedCreateWithoutFromReviewsInputSchema) ]),
}).strict();

export const UsersOnReviewLikeCreateWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateWithoutReviewInput> = z.object({
  user: z.lazy(() => UserCreateNestedOneWithoutUsersOnReviewLikeInputSchema)
}).strict();

export const UsersOnReviewLikeUncheckedCreateWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUncheckedCreateWithoutReviewInput> = z.object({
  userId: z.string()
}).strict();

export const UsersOnReviewLikeCreateOrConnectWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateOrConnectWithoutReviewInput> = z.object({
  where: z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersOnReviewLikeCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutReviewInputSchema) ]),
}).strict();

export const UsersOnReviewLikeCreateManyReviewInputEnvelopeSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateManyReviewInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UsersOnReviewLikeCreateManyReviewInputSchema),z.lazy(() => UsersOnReviewLikeCreateManyReviewInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UsersOnReviewBadCreateWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewBadCreateWithoutReviewInput> = z.object({
  user: z.lazy(() => UserCreateNestedOneWithoutUsersOnReviewBadInputSchema)
}).strict();

export const UsersOnReviewBadUncheckedCreateWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewBadUncheckedCreateWithoutReviewInput> = z.object({
  userId: z.string()
}).strict();

export const UsersOnReviewBadCreateOrConnectWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewBadCreateOrConnectWithoutReviewInput> = z.object({
  where: z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsersOnReviewBadCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutReviewInputSchema) ]),
}).strict();

export const UsersOnReviewBadCreateManyReviewInputEnvelopeSchema: z.ZodType<Prisma.UsersOnReviewBadCreateManyReviewInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UsersOnReviewBadCreateManyReviewInputSchema),z.lazy(() => UsersOnReviewBadCreateManyReviewInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutReviewInputSchema: z.ZodType<Prisma.UserUpsertWithoutReviewInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutReviewInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReviewInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutReviewInputSchema),z.lazy(() => UserUncheckedCreateWithoutReviewInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutReviewInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReviewInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutReviewInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReviewInputSchema) ]),
}).strict();

export const UserUpdateWithoutReviewInputSchema: z.ZodType<Prisma.UserUpdateWithoutReviewInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUpdateManyWithoutUserNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutReviewInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutReviewInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const CharacterUpsertWithoutToReviewsInputSchema: z.ZodType<Prisma.CharacterUpsertWithoutToReviewsInput> = z.object({
  update: z.union([ z.lazy(() => CharacterUpdateWithoutToReviewsInputSchema),z.lazy(() => CharacterUncheckedUpdateWithoutToReviewsInputSchema) ]),
  create: z.union([ z.lazy(() => CharacterCreateWithoutToReviewsInputSchema),z.lazy(() => CharacterUncheckedCreateWithoutToReviewsInputSchema) ]),
  where: z.lazy(() => CharacterWhereInputSchema).optional()
}).strict();

export const CharacterUpdateToOneWithWhereWithoutToReviewsInputSchema: z.ZodType<Prisma.CharacterUpdateToOneWithWhereWithoutToReviewsInput> = z.object({
  where: z.lazy(() => CharacterWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CharacterUpdateWithoutToReviewsInputSchema),z.lazy(() => CharacterUncheckedUpdateWithoutToReviewsInputSchema) ]),
}).strict();

export const CharacterUpdateWithoutToReviewsInputSchema: z.ZodType<Prisma.CharacterUpdateWithoutToReviewsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fromReviews: z.lazy(() => ReviewUpdateManyWithoutFromNestedInputSchema).optional()
}).strict();

export const CharacterUncheckedUpdateWithoutToReviewsInputSchema: z.ZodType<Prisma.CharacterUncheckedUpdateWithoutToReviewsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fromReviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutFromNestedInputSchema).optional()
}).strict();

export const CharacterUpsertWithoutFromReviewsInputSchema: z.ZodType<Prisma.CharacterUpsertWithoutFromReviewsInput> = z.object({
  update: z.union([ z.lazy(() => CharacterUpdateWithoutFromReviewsInputSchema),z.lazy(() => CharacterUncheckedUpdateWithoutFromReviewsInputSchema) ]),
  create: z.union([ z.lazy(() => CharacterCreateWithoutFromReviewsInputSchema),z.lazy(() => CharacterUncheckedCreateWithoutFromReviewsInputSchema) ]),
  where: z.lazy(() => CharacterWhereInputSchema).optional()
}).strict();

export const CharacterUpdateToOneWithWhereWithoutFromReviewsInputSchema: z.ZodType<Prisma.CharacterUpdateToOneWithWhereWithoutFromReviewsInput> = z.object({
  where: z.lazy(() => CharacterWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CharacterUpdateWithoutFromReviewsInputSchema),z.lazy(() => CharacterUncheckedUpdateWithoutFromReviewsInputSchema) ]),
}).strict();

export const CharacterUpdateWithoutFromReviewsInputSchema: z.ZodType<Prisma.CharacterUpdateWithoutFromReviewsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  toReviews: z.lazy(() => ReviewUpdateManyWithoutToNestedInputSchema).optional()
}).strict();

export const CharacterUncheckedUpdateWithoutFromReviewsInputSchema: z.ZodType<Prisma.CharacterUncheckedUpdateWithoutFromReviewsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  toReviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutToNestedInputSchema).optional()
}).strict();

export const UsersOnReviewLikeUpsertWithWhereUniqueWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUpsertWithWhereUniqueWithoutReviewInput> = z.object({
  where: z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UsersOnReviewLikeUpdateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedUpdateWithoutReviewInputSchema) ]),
  create: z.union([ z.lazy(() => UsersOnReviewLikeCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedCreateWithoutReviewInputSchema) ]),
}).strict();

export const UsersOnReviewLikeUpdateWithWhereUniqueWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUpdateWithWhereUniqueWithoutReviewInput> = z.object({
  where: z.lazy(() => UsersOnReviewLikeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UsersOnReviewLikeUpdateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedUpdateWithoutReviewInputSchema) ]),
}).strict();

export const UsersOnReviewLikeUpdateManyWithWhereWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUpdateManyWithWhereWithoutReviewInput> = z.object({
  where: z.lazy(() => UsersOnReviewLikeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UsersOnReviewLikeUpdateManyMutationInputSchema),z.lazy(() => UsersOnReviewLikeUncheckedUpdateManyWithoutReviewInputSchema) ]),
}).strict();

export const UsersOnReviewBadUpsertWithWhereUniqueWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewBadUpsertWithWhereUniqueWithoutReviewInput> = z.object({
  where: z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UsersOnReviewBadUpdateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadUncheckedUpdateWithoutReviewInputSchema) ]),
  create: z.union([ z.lazy(() => UsersOnReviewBadCreateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadUncheckedCreateWithoutReviewInputSchema) ]),
}).strict();

export const UsersOnReviewBadUpdateWithWhereUniqueWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewBadUpdateWithWhereUniqueWithoutReviewInput> = z.object({
  where: z.lazy(() => UsersOnReviewBadWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UsersOnReviewBadUpdateWithoutReviewInputSchema),z.lazy(() => UsersOnReviewBadUncheckedUpdateWithoutReviewInputSchema) ]),
}).strict();

export const UsersOnReviewBadUpdateManyWithWhereWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewBadUpdateManyWithWhereWithoutReviewInput> = z.object({
  where: z.lazy(() => UsersOnReviewBadScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UsersOnReviewBadUpdateManyMutationInputSchema),z.lazy(() => UsersOnReviewBadUncheckedUpdateManyWithoutReviewInputSchema) ]),
}).strict();

export const ReviewCreateWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.ReviewCreateWithoutUsersOnReviewLikeInput> = z.object({
  id: z.string().uuid().optional(),
  userCode: z.bigint(),
  message: z.string(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewInputSchema),
  to: z.lazy(() => CharacterCreateNestedOneWithoutToReviewsInputSchema),
  from: z.lazy(() => CharacterCreateNestedOneWithoutFromReviewsInputSchema),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadCreateNestedManyWithoutReviewInputSchema).optional()
}).strict();

export const ReviewUncheckedCreateWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutUsersOnReviewLikeInput> = z.object({
  id: z.string().uuid().optional(),
  userId: z.string(),
  userCode: z.bigint(),
  message: z.string(),
  toCharacterId: z.number().int(),
  fromCharacterId: z.number().int(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedCreateNestedManyWithoutReviewInputSchema).optional()
}).strict();

export const ReviewCreateOrConnectWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutUsersOnReviewLikeInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReviewCreateWithoutUsersOnReviewLikeInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUsersOnReviewLikeInputSchema) ]),
}).strict();

export const UserCreateWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.UserCreateWithoutUsersOnReviewLikeInput> = z.object({
  id: z.string().uuid().optional(),
  authId: z.string(),
  name: z.string(),
  review: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutUsersOnReviewLikeInput> = z.object({
  id: z.string().uuid().optional(),
  authId: z.string(),
  name: z.string(),
  review: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUsersOnReviewLikeInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUsersOnReviewLikeInputSchema),z.lazy(() => UserUncheckedCreateWithoutUsersOnReviewLikeInputSchema) ]),
}).strict();

export const ReviewUpsertWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.ReviewUpsertWithoutUsersOnReviewLikeInput> = z.object({
  update: z.union([ z.lazy(() => ReviewUpdateWithoutUsersOnReviewLikeInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutUsersOnReviewLikeInputSchema) ]),
  create: z.union([ z.lazy(() => ReviewCreateWithoutUsersOnReviewLikeInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUsersOnReviewLikeInputSchema) ]),
  where: z.lazy(() => ReviewWhereInputSchema).optional()
}).strict();

export const ReviewUpdateToOneWithWhereWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.ReviewUpdateToOneWithWhereWithoutUsersOnReviewLikeInput> = z.object({
  where: z.lazy(() => ReviewWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ReviewUpdateWithoutUsersOnReviewLikeInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutUsersOnReviewLikeInputSchema) ]),
}).strict();

export const ReviewUpdateWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.ReviewUpdateWithoutUsersOnReviewLikeInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutReviewNestedInputSchema).optional(),
  to: z.lazy(() => CharacterUpdateOneRequiredWithoutToReviewsNestedInputSchema).optional(),
  from: z.lazy(() => CharacterUpdateOneRequiredWithoutFromReviewsNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUpdateManyWithoutReviewNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateWithoutUsersOnReviewLikeInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  toCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  fromCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedUpdateManyWithoutReviewNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.UserUpsertWithoutUsersOnReviewLikeInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUsersOnReviewLikeInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUsersOnReviewLikeInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUsersOnReviewLikeInputSchema),z.lazy(() => UserUncheckedCreateWithoutUsersOnReviewLikeInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUsersOnReviewLikeInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUsersOnReviewLikeInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUsersOnReviewLikeInputSchema) ]),
}).strict();

export const UserUpdateWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.UserUpdateWithoutUsersOnReviewLikeInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutUsersOnReviewLikeInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutUsersOnReviewLikeInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const ReviewCreateWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.ReviewCreateWithoutUsersOnReviewBadInput> = z.object({
  id: z.string().uuid().optional(),
  userCode: z.bigint(),
  message: z.string(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewInputSchema),
  to: z.lazy(() => CharacterCreateNestedOneWithoutToReviewsInputSchema),
  from: z.lazy(() => CharacterCreateNestedOneWithoutFromReviewsInputSchema),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeCreateNestedManyWithoutReviewInputSchema).optional()
}).strict();

export const ReviewUncheckedCreateWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutUsersOnReviewBadInput> = z.object({
  id: z.string().uuid().optional(),
  userId: z.string(),
  userCode: z.bigint(),
  message: z.string(),
  toCharacterId: z.number().int(),
  fromCharacterId: z.number().int(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedCreateNestedManyWithoutReviewInputSchema).optional()
}).strict();

export const ReviewCreateOrConnectWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutUsersOnReviewBadInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReviewCreateWithoutUsersOnReviewBadInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUsersOnReviewBadInputSchema) ]),
}).strict();

export const UserCreateWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.UserCreateWithoutUsersOnReviewBadInput> = z.object({
  id: z.string().uuid().optional(),
  authId: z.string(),
  name: z.string(),
  review: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutUsersOnReviewBadInput> = z.object({
  id: z.string().uuid().optional(),
  authId: z.string(),
  name: z.string(),
  review: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUsersOnReviewBadInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUsersOnReviewBadInputSchema),z.lazy(() => UserUncheckedCreateWithoutUsersOnReviewBadInputSchema) ]),
}).strict();

export const ReviewUpsertWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.ReviewUpsertWithoutUsersOnReviewBadInput> = z.object({
  update: z.union([ z.lazy(() => ReviewUpdateWithoutUsersOnReviewBadInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutUsersOnReviewBadInputSchema) ]),
  create: z.union([ z.lazy(() => ReviewCreateWithoutUsersOnReviewBadInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUsersOnReviewBadInputSchema) ]),
  where: z.lazy(() => ReviewWhereInputSchema).optional()
}).strict();

export const ReviewUpdateToOneWithWhereWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.ReviewUpdateToOneWithWhereWithoutUsersOnReviewBadInput> = z.object({
  where: z.lazy(() => ReviewWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ReviewUpdateWithoutUsersOnReviewBadInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutUsersOnReviewBadInputSchema) ]),
}).strict();

export const ReviewUpdateWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.ReviewUpdateWithoutUsersOnReviewBadInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutReviewNestedInputSchema).optional(),
  to: z.lazy(() => CharacterUpdateOneRequiredWithoutToReviewsNestedInputSchema).optional(),
  from: z.lazy(() => CharacterUpdateOneRequiredWithoutFromReviewsNestedInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUpdateManyWithoutReviewNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateWithoutUsersOnReviewBadInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  toCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  fromCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedUpdateManyWithoutReviewNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.UserUpsertWithoutUsersOnReviewBadInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUsersOnReviewBadInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUsersOnReviewBadInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUsersOnReviewBadInputSchema),z.lazy(() => UserUncheckedCreateWithoutUsersOnReviewBadInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUsersOnReviewBadInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUsersOnReviewBadInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUsersOnReviewBadInputSchema) ]),
}).strict();

export const UserUpdateWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.UserUpdateWithoutUsersOnReviewBadInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutUsersOnReviewBadInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutUsersOnReviewBadInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const ReviewCreateWithoutToInputSchema: z.ZodType<Prisma.ReviewCreateWithoutToInput> = z.object({
  id: z.string().uuid().optional(),
  userCode: z.bigint(),
  message: z.string(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewInputSchema),
  from: z.lazy(() => CharacterCreateNestedOneWithoutFromReviewsInputSchema),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeCreateNestedManyWithoutReviewInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadCreateNestedManyWithoutReviewInputSchema).optional()
}).strict();

export const ReviewUncheckedCreateWithoutToInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutToInput> = z.object({
  id: z.string().uuid().optional(),
  userId: z.string(),
  userCode: z.bigint(),
  message: z.string(),
  fromCharacterId: z.number().int(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedCreateNestedManyWithoutReviewInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedCreateNestedManyWithoutReviewInputSchema).optional()
}).strict();

export const ReviewCreateOrConnectWithoutToInputSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutToInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReviewCreateWithoutToInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutToInputSchema) ]),
}).strict();

export const ReviewCreateManyToInputEnvelopeSchema: z.ZodType<Prisma.ReviewCreateManyToInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReviewCreateManyToInputSchema),z.lazy(() => ReviewCreateManyToInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ReviewCreateWithoutFromInputSchema: z.ZodType<Prisma.ReviewCreateWithoutFromInput> = z.object({
  id: z.string().uuid().optional(),
  userCode: z.bigint(),
  message: z.string(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewInputSchema),
  to: z.lazy(() => CharacterCreateNestedOneWithoutToReviewsInputSchema),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeCreateNestedManyWithoutReviewInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadCreateNestedManyWithoutReviewInputSchema).optional()
}).strict();

export const ReviewUncheckedCreateWithoutFromInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutFromInput> = z.object({
  id: z.string().uuid().optional(),
  userId: z.string(),
  userCode: z.bigint(),
  message: z.string(),
  toCharacterId: z.number().int(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedCreateNestedManyWithoutReviewInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedCreateNestedManyWithoutReviewInputSchema).optional()
}).strict();

export const ReviewCreateOrConnectWithoutFromInputSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutFromInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReviewCreateWithoutFromInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutFromInputSchema) ]),
}).strict();

export const ReviewCreateManyFromInputEnvelopeSchema: z.ZodType<Prisma.ReviewCreateManyFromInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReviewCreateManyFromInputSchema),z.lazy(() => ReviewCreateManyFromInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ReviewUpsertWithWhereUniqueWithoutToInputSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutToInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReviewUpdateWithoutToInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutToInputSchema) ]),
  create: z.union([ z.lazy(() => ReviewCreateWithoutToInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutToInputSchema) ]),
}).strict();

export const ReviewUpdateWithWhereUniqueWithoutToInputSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutToInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReviewUpdateWithoutToInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutToInputSchema) ]),
}).strict();

export const ReviewUpdateManyWithWhereWithoutToInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutToInput> = z.object({
  where: z.lazy(() => ReviewScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReviewUpdateManyMutationInputSchema),z.lazy(() => ReviewUncheckedUpdateManyWithoutToInputSchema) ]),
}).strict();

export const ReviewUpsertWithWhereUniqueWithoutFromInputSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutFromInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReviewUpdateWithoutFromInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutFromInputSchema) ]),
  create: z.union([ z.lazy(() => ReviewCreateWithoutFromInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutFromInputSchema) ]),
}).strict();

export const ReviewUpdateWithWhereUniqueWithoutFromInputSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutFromInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReviewUpdateWithoutFromInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutFromInputSchema) ]),
}).strict();

export const ReviewUpdateManyWithWhereWithoutFromInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutFromInput> = z.object({
  where: z.lazy(() => ReviewScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReviewUpdateManyMutationInputSchema),z.lazy(() => ReviewUncheckedUpdateManyWithoutFromInputSchema) ]),
}).strict();

export const ReviewCreateManyUserInputSchema: z.ZodType<Prisma.ReviewCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  userCode: z.bigint(),
  message: z.string(),
  toCharacterId: z.number().int(),
  fromCharacterId: z.number().int(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();

export const UsersOnReviewLikeCreateManyUserInputSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateManyUserInput> = z.object({
  reviewId: z.string()
}).strict();

export const UsersOnReviewBadCreateManyUserInputSchema: z.ZodType<Prisma.UsersOnReviewBadCreateManyUserInput> = z.object({
  reviewId: z.string()
}).strict();

export const ReviewUpdateWithoutUserInputSchema: z.ZodType<Prisma.ReviewUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  to: z.lazy(() => CharacterUpdateOneRequiredWithoutToReviewsNestedInputSchema).optional(),
  from: z.lazy(() => CharacterUpdateOneRequiredWithoutFromReviewsNestedInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUpdateManyWithoutReviewNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUpdateManyWithoutReviewNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  toCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  fromCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedUpdateManyWithoutReviewNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedUpdateManyWithoutReviewNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  toCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  fromCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewLikeUpdateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUpdateWithoutUserInput> = z.object({
  review: z.lazy(() => ReviewUpdateOneRequiredWithoutUsersOnReviewLikeNestedInputSchema).optional()
}).strict();

export const UsersOnReviewLikeUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUncheckedUpdateWithoutUserInput> = z.object({
  reviewId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewLikeUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUncheckedUpdateManyWithoutUserInput> = z.object({
  reviewId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewBadUpdateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewBadUpdateWithoutUserInput> = z.object({
  review: z.lazy(() => ReviewUpdateOneRequiredWithoutUsersOnReviewBadNestedInputSchema).optional()
}).strict();

export const UsersOnReviewBadUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewBadUncheckedUpdateWithoutUserInput> = z.object({
  reviewId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewBadUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.UsersOnReviewBadUncheckedUpdateManyWithoutUserInput> = z.object({
  reviewId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewLikeCreateManyReviewInputSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateManyReviewInput> = z.object({
  userId: z.string()
}).strict();

export const UsersOnReviewBadCreateManyReviewInputSchema: z.ZodType<Prisma.UsersOnReviewBadCreateManyReviewInput> = z.object({
  userId: z.string()
}).strict();

export const UsersOnReviewLikeUpdateWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUpdateWithoutReviewInput> = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutUsersOnReviewLikeNestedInputSchema).optional()
}).strict();

export const UsersOnReviewLikeUncheckedUpdateWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUncheckedUpdateWithoutReviewInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewLikeUncheckedUpdateManyWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewLikeUncheckedUpdateManyWithoutReviewInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewBadUpdateWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewBadUpdateWithoutReviewInput> = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutUsersOnReviewBadNestedInputSchema).optional()
}).strict();

export const UsersOnReviewBadUncheckedUpdateWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewBadUncheckedUpdateWithoutReviewInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsersOnReviewBadUncheckedUpdateManyWithoutReviewInputSchema: z.ZodType<Prisma.UsersOnReviewBadUncheckedUpdateManyWithoutReviewInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReviewCreateManyToInputSchema: z.ZodType<Prisma.ReviewCreateManyToInput> = z.object({
  id: z.string().uuid().optional(),
  userId: z.string(),
  userCode: z.bigint(),
  message: z.string(),
  fromCharacterId: z.number().int(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ReviewCreateManyFromInputSchema: z.ZodType<Prisma.ReviewCreateManyFromInput> = z.object({
  id: z.string().uuid().optional(),
  userId: z.string(),
  userCode: z.bigint(),
  message: z.string(),
  toCharacterId: z.number().int(),
  emotionFlame: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ReviewUpdateWithoutToInputSchema: z.ZodType<Prisma.ReviewUpdateWithoutToInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutReviewNestedInputSchema).optional(),
  from: z.lazy(() => CharacterUpdateOneRequiredWithoutFromReviewsNestedInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUpdateManyWithoutReviewNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUpdateManyWithoutReviewNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateWithoutToInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateWithoutToInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fromCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedUpdateManyWithoutReviewNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedUpdateManyWithoutReviewNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateManyWithoutToInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutToInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fromCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReviewUpdateWithoutFromInputSchema: z.ZodType<Prisma.ReviewUpdateWithoutFromInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutReviewNestedInputSchema).optional(),
  to: z.lazy(() => CharacterUpdateOneRequiredWithoutToReviewsNestedInputSchema).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUpdateManyWithoutReviewNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUpdateManyWithoutReviewNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateWithoutFromInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateWithoutFromInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  toCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UsersOnReviewLike: z.lazy(() => UsersOnReviewLikeUncheckedUpdateManyWithoutReviewNestedInputSchema).optional(),
  UsersOnReviewBad: z.lazy(() => UsersOnReviewBadUncheckedUpdateManyWithoutReviewNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateManyWithoutFromInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutFromInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userCode: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  toCharacterId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  emotionFlame: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const ReviewFindFirstArgsSchema: z.ZodType<Prisma.ReviewFindFirstArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithRelationInputSchema.array(),ReviewOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReviewScalarFieldEnumSchema,ReviewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReviewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ReviewFindFirstOrThrowArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithRelationInputSchema.array(),ReviewOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReviewScalarFieldEnumSchema,ReviewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReviewFindManyArgsSchema: z.ZodType<Prisma.ReviewFindManyArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithRelationInputSchema.array(),ReviewOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReviewScalarFieldEnumSchema,ReviewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReviewAggregateArgsSchema: z.ZodType<Prisma.ReviewAggregateArgs> = z.object({
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithRelationInputSchema.array(),ReviewOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReviewGroupByArgsSchema: z.ZodType<Prisma.ReviewGroupByArgs> = z.object({
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithAggregationInputSchema.array(),ReviewOrderByWithAggregationInputSchema ]).optional(),
  by: ReviewScalarFieldEnumSchema.array(),
  having: ReviewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReviewFindUniqueArgsSchema: z.ZodType<Prisma.ReviewFindUniqueArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereUniqueInputSchema,
}).strict() ;

export const ReviewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ReviewFindUniqueOrThrowArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereUniqueInputSchema,
}).strict() ;

export const UsersOnReviewLikeFindFirstArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeFindFirstArgs> = z.object({
  select: UsersOnReviewLikeSelectSchema.optional(),
  include: UsersOnReviewLikeIncludeSchema.optional(),
  where: UsersOnReviewLikeWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnReviewLikeOrderByWithRelationInputSchema.array(),UsersOnReviewLikeOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersOnReviewLikeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersOnReviewLikeScalarFieldEnumSchema,UsersOnReviewLikeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UsersOnReviewLikeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeFindFirstOrThrowArgs> = z.object({
  select: UsersOnReviewLikeSelectSchema.optional(),
  include: UsersOnReviewLikeIncludeSchema.optional(),
  where: UsersOnReviewLikeWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnReviewLikeOrderByWithRelationInputSchema.array(),UsersOnReviewLikeOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersOnReviewLikeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersOnReviewLikeScalarFieldEnumSchema,UsersOnReviewLikeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UsersOnReviewLikeFindManyArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeFindManyArgs> = z.object({
  select: UsersOnReviewLikeSelectSchema.optional(),
  include: UsersOnReviewLikeIncludeSchema.optional(),
  where: UsersOnReviewLikeWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnReviewLikeOrderByWithRelationInputSchema.array(),UsersOnReviewLikeOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersOnReviewLikeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersOnReviewLikeScalarFieldEnumSchema,UsersOnReviewLikeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UsersOnReviewLikeAggregateArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeAggregateArgs> = z.object({
  where: UsersOnReviewLikeWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnReviewLikeOrderByWithRelationInputSchema.array(),UsersOnReviewLikeOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersOnReviewLikeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UsersOnReviewLikeGroupByArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeGroupByArgs> = z.object({
  where: UsersOnReviewLikeWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnReviewLikeOrderByWithAggregationInputSchema.array(),UsersOnReviewLikeOrderByWithAggregationInputSchema ]).optional(),
  by: UsersOnReviewLikeScalarFieldEnumSchema.array(),
  having: UsersOnReviewLikeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UsersOnReviewLikeFindUniqueArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeFindUniqueArgs> = z.object({
  select: UsersOnReviewLikeSelectSchema.optional(),
  include: UsersOnReviewLikeIncludeSchema.optional(),
  where: UsersOnReviewLikeWhereUniqueInputSchema,
}).strict() ;

export const UsersOnReviewLikeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeFindUniqueOrThrowArgs> = z.object({
  select: UsersOnReviewLikeSelectSchema.optional(),
  include: UsersOnReviewLikeIncludeSchema.optional(),
  where: UsersOnReviewLikeWhereUniqueInputSchema,
}).strict() ;

export const UsersOnReviewBadFindFirstArgsSchema: z.ZodType<Prisma.UsersOnReviewBadFindFirstArgs> = z.object({
  select: UsersOnReviewBadSelectSchema.optional(),
  include: UsersOnReviewBadIncludeSchema.optional(),
  where: UsersOnReviewBadWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnReviewBadOrderByWithRelationInputSchema.array(),UsersOnReviewBadOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersOnReviewBadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersOnReviewBadScalarFieldEnumSchema,UsersOnReviewBadScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UsersOnReviewBadFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UsersOnReviewBadFindFirstOrThrowArgs> = z.object({
  select: UsersOnReviewBadSelectSchema.optional(),
  include: UsersOnReviewBadIncludeSchema.optional(),
  where: UsersOnReviewBadWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnReviewBadOrderByWithRelationInputSchema.array(),UsersOnReviewBadOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersOnReviewBadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersOnReviewBadScalarFieldEnumSchema,UsersOnReviewBadScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UsersOnReviewBadFindManyArgsSchema: z.ZodType<Prisma.UsersOnReviewBadFindManyArgs> = z.object({
  select: UsersOnReviewBadSelectSchema.optional(),
  include: UsersOnReviewBadIncludeSchema.optional(),
  where: UsersOnReviewBadWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnReviewBadOrderByWithRelationInputSchema.array(),UsersOnReviewBadOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersOnReviewBadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersOnReviewBadScalarFieldEnumSchema,UsersOnReviewBadScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UsersOnReviewBadAggregateArgsSchema: z.ZodType<Prisma.UsersOnReviewBadAggregateArgs> = z.object({
  where: UsersOnReviewBadWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnReviewBadOrderByWithRelationInputSchema.array(),UsersOnReviewBadOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersOnReviewBadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UsersOnReviewBadGroupByArgsSchema: z.ZodType<Prisma.UsersOnReviewBadGroupByArgs> = z.object({
  where: UsersOnReviewBadWhereInputSchema.optional(),
  orderBy: z.union([ UsersOnReviewBadOrderByWithAggregationInputSchema.array(),UsersOnReviewBadOrderByWithAggregationInputSchema ]).optional(),
  by: UsersOnReviewBadScalarFieldEnumSchema.array(),
  having: UsersOnReviewBadScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UsersOnReviewBadFindUniqueArgsSchema: z.ZodType<Prisma.UsersOnReviewBadFindUniqueArgs> = z.object({
  select: UsersOnReviewBadSelectSchema.optional(),
  include: UsersOnReviewBadIncludeSchema.optional(),
  where: UsersOnReviewBadWhereUniqueInputSchema,
}).strict() ;

export const UsersOnReviewBadFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UsersOnReviewBadFindUniqueOrThrowArgs> = z.object({
  select: UsersOnReviewBadSelectSchema.optional(),
  include: UsersOnReviewBadIncludeSchema.optional(),
  where: UsersOnReviewBadWhereUniqueInputSchema,
}).strict() ;

export const CharacterFindFirstArgsSchema: z.ZodType<Prisma.CharacterFindFirstArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  where: CharacterWhereInputSchema.optional(),
  orderBy: z.union([ CharacterOrderByWithRelationInputSchema.array(),CharacterOrderByWithRelationInputSchema ]).optional(),
  cursor: CharacterWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CharacterScalarFieldEnumSchema,CharacterScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CharacterFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CharacterFindFirstOrThrowArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  where: CharacterWhereInputSchema.optional(),
  orderBy: z.union([ CharacterOrderByWithRelationInputSchema.array(),CharacterOrderByWithRelationInputSchema ]).optional(),
  cursor: CharacterWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CharacterScalarFieldEnumSchema,CharacterScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CharacterFindManyArgsSchema: z.ZodType<Prisma.CharacterFindManyArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  where: CharacterWhereInputSchema.optional(),
  orderBy: z.union([ CharacterOrderByWithRelationInputSchema.array(),CharacterOrderByWithRelationInputSchema ]).optional(),
  cursor: CharacterWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CharacterScalarFieldEnumSchema,CharacterScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CharacterAggregateArgsSchema: z.ZodType<Prisma.CharacterAggregateArgs> = z.object({
  where: CharacterWhereInputSchema.optional(),
  orderBy: z.union([ CharacterOrderByWithRelationInputSchema.array(),CharacterOrderByWithRelationInputSchema ]).optional(),
  cursor: CharacterWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CharacterGroupByArgsSchema: z.ZodType<Prisma.CharacterGroupByArgs> = z.object({
  where: CharacterWhereInputSchema.optional(),
  orderBy: z.union([ CharacterOrderByWithAggregationInputSchema.array(),CharacterOrderByWithAggregationInputSchema ]).optional(),
  by: CharacterScalarFieldEnumSchema.array(),
  having: CharacterScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CharacterFindUniqueArgsSchema: z.ZodType<Prisma.CharacterFindUniqueArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  where: CharacterWhereUniqueInputSchema,
}).strict() ;

export const CharacterFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CharacterFindUniqueOrThrowArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  where: CharacterWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ReviewCreateArgsSchema: z.ZodType<Prisma.ReviewCreateArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  data: z.union([ ReviewCreateInputSchema,ReviewUncheckedCreateInputSchema ]),
}).strict() ;

export const ReviewUpsertArgsSchema: z.ZodType<Prisma.ReviewUpsertArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereUniqueInputSchema,
  create: z.union([ ReviewCreateInputSchema,ReviewUncheckedCreateInputSchema ]),
  update: z.union([ ReviewUpdateInputSchema,ReviewUncheckedUpdateInputSchema ]),
}).strict() ;

export const ReviewCreateManyArgsSchema: z.ZodType<Prisma.ReviewCreateManyArgs> = z.object({
  data: z.union([ ReviewCreateManyInputSchema,ReviewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ReviewCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ReviewCreateManyAndReturnArgs> = z.object({
  data: z.union([ ReviewCreateManyInputSchema,ReviewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ReviewDeleteArgsSchema: z.ZodType<Prisma.ReviewDeleteArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereUniqueInputSchema,
}).strict() ;

export const ReviewUpdateArgsSchema: z.ZodType<Prisma.ReviewUpdateArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  data: z.union([ ReviewUpdateInputSchema,ReviewUncheckedUpdateInputSchema ]),
  where: ReviewWhereUniqueInputSchema,
}).strict() ;

export const ReviewUpdateManyArgsSchema: z.ZodType<Prisma.ReviewUpdateManyArgs> = z.object({
  data: z.union([ ReviewUpdateManyMutationInputSchema,ReviewUncheckedUpdateManyInputSchema ]),
  where: ReviewWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ReviewUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ReviewUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ReviewUpdateManyMutationInputSchema,ReviewUncheckedUpdateManyInputSchema ]),
  where: ReviewWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ReviewDeleteManyArgsSchema: z.ZodType<Prisma.ReviewDeleteManyArgs> = z.object({
  where: ReviewWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UsersOnReviewLikeCreateArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateArgs> = z.object({
  select: UsersOnReviewLikeSelectSchema.optional(),
  include: UsersOnReviewLikeIncludeSchema.optional(),
  data: z.union([ UsersOnReviewLikeCreateInputSchema,UsersOnReviewLikeUncheckedCreateInputSchema ]),
}).strict() ;

export const UsersOnReviewLikeUpsertArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeUpsertArgs> = z.object({
  select: UsersOnReviewLikeSelectSchema.optional(),
  include: UsersOnReviewLikeIncludeSchema.optional(),
  where: UsersOnReviewLikeWhereUniqueInputSchema,
  create: z.union([ UsersOnReviewLikeCreateInputSchema,UsersOnReviewLikeUncheckedCreateInputSchema ]),
  update: z.union([ UsersOnReviewLikeUpdateInputSchema,UsersOnReviewLikeUncheckedUpdateInputSchema ]),
}).strict() ;

export const UsersOnReviewLikeCreateManyArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateManyArgs> = z.object({
  data: z.union([ UsersOnReviewLikeCreateManyInputSchema,UsersOnReviewLikeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UsersOnReviewLikeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeCreateManyAndReturnArgs> = z.object({
  data: z.union([ UsersOnReviewLikeCreateManyInputSchema,UsersOnReviewLikeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UsersOnReviewLikeDeleteArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeDeleteArgs> = z.object({
  select: UsersOnReviewLikeSelectSchema.optional(),
  include: UsersOnReviewLikeIncludeSchema.optional(),
  where: UsersOnReviewLikeWhereUniqueInputSchema,
}).strict() ;

export const UsersOnReviewLikeUpdateArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeUpdateArgs> = z.object({
  select: UsersOnReviewLikeSelectSchema.optional(),
  include: UsersOnReviewLikeIncludeSchema.optional(),
  data: z.union([ UsersOnReviewLikeUpdateInputSchema,UsersOnReviewLikeUncheckedUpdateInputSchema ]),
  where: UsersOnReviewLikeWhereUniqueInputSchema,
}).strict() ;

export const UsersOnReviewLikeUpdateManyArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeUpdateManyArgs> = z.object({
  data: z.union([ UsersOnReviewLikeUpdateManyMutationInputSchema,UsersOnReviewLikeUncheckedUpdateManyInputSchema ]),
  where: UsersOnReviewLikeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UsersOnReviewLikeUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UsersOnReviewLikeUpdateManyMutationInputSchema,UsersOnReviewLikeUncheckedUpdateManyInputSchema ]),
  where: UsersOnReviewLikeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UsersOnReviewLikeDeleteManyArgsSchema: z.ZodType<Prisma.UsersOnReviewLikeDeleteManyArgs> = z.object({
  where: UsersOnReviewLikeWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UsersOnReviewBadCreateArgsSchema: z.ZodType<Prisma.UsersOnReviewBadCreateArgs> = z.object({
  select: UsersOnReviewBadSelectSchema.optional(),
  include: UsersOnReviewBadIncludeSchema.optional(),
  data: z.union([ UsersOnReviewBadCreateInputSchema,UsersOnReviewBadUncheckedCreateInputSchema ]),
}).strict() ;

export const UsersOnReviewBadUpsertArgsSchema: z.ZodType<Prisma.UsersOnReviewBadUpsertArgs> = z.object({
  select: UsersOnReviewBadSelectSchema.optional(),
  include: UsersOnReviewBadIncludeSchema.optional(),
  where: UsersOnReviewBadWhereUniqueInputSchema,
  create: z.union([ UsersOnReviewBadCreateInputSchema,UsersOnReviewBadUncheckedCreateInputSchema ]),
  update: z.union([ UsersOnReviewBadUpdateInputSchema,UsersOnReviewBadUncheckedUpdateInputSchema ]),
}).strict() ;

export const UsersOnReviewBadCreateManyArgsSchema: z.ZodType<Prisma.UsersOnReviewBadCreateManyArgs> = z.object({
  data: z.union([ UsersOnReviewBadCreateManyInputSchema,UsersOnReviewBadCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UsersOnReviewBadCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UsersOnReviewBadCreateManyAndReturnArgs> = z.object({
  data: z.union([ UsersOnReviewBadCreateManyInputSchema,UsersOnReviewBadCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UsersOnReviewBadDeleteArgsSchema: z.ZodType<Prisma.UsersOnReviewBadDeleteArgs> = z.object({
  select: UsersOnReviewBadSelectSchema.optional(),
  include: UsersOnReviewBadIncludeSchema.optional(),
  where: UsersOnReviewBadWhereUniqueInputSchema,
}).strict() ;

export const UsersOnReviewBadUpdateArgsSchema: z.ZodType<Prisma.UsersOnReviewBadUpdateArgs> = z.object({
  select: UsersOnReviewBadSelectSchema.optional(),
  include: UsersOnReviewBadIncludeSchema.optional(),
  data: z.union([ UsersOnReviewBadUpdateInputSchema,UsersOnReviewBadUncheckedUpdateInputSchema ]),
  where: UsersOnReviewBadWhereUniqueInputSchema,
}).strict() ;

export const UsersOnReviewBadUpdateManyArgsSchema: z.ZodType<Prisma.UsersOnReviewBadUpdateManyArgs> = z.object({
  data: z.union([ UsersOnReviewBadUpdateManyMutationInputSchema,UsersOnReviewBadUncheckedUpdateManyInputSchema ]),
  where: UsersOnReviewBadWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UsersOnReviewBadUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UsersOnReviewBadUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UsersOnReviewBadUpdateManyMutationInputSchema,UsersOnReviewBadUncheckedUpdateManyInputSchema ]),
  where: UsersOnReviewBadWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UsersOnReviewBadDeleteManyArgsSchema: z.ZodType<Prisma.UsersOnReviewBadDeleteManyArgs> = z.object({
  where: UsersOnReviewBadWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CharacterCreateArgsSchema: z.ZodType<Prisma.CharacterCreateArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  data: z.union([ CharacterCreateInputSchema,CharacterUncheckedCreateInputSchema ]),
}).strict() ;

export const CharacterUpsertArgsSchema: z.ZodType<Prisma.CharacterUpsertArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  where: CharacterWhereUniqueInputSchema,
  create: z.union([ CharacterCreateInputSchema,CharacterUncheckedCreateInputSchema ]),
  update: z.union([ CharacterUpdateInputSchema,CharacterUncheckedUpdateInputSchema ]),
}).strict() ;

export const CharacterCreateManyArgsSchema: z.ZodType<Prisma.CharacterCreateManyArgs> = z.object({
  data: z.union([ CharacterCreateManyInputSchema,CharacterCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CharacterCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CharacterCreateManyAndReturnArgs> = z.object({
  data: z.union([ CharacterCreateManyInputSchema,CharacterCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CharacterDeleteArgsSchema: z.ZodType<Prisma.CharacterDeleteArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  where: CharacterWhereUniqueInputSchema,
}).strict() ;

export const CharacterUpdateArgsSchema: z.ZodType<Prisma.CharacterUpdateArgs> = z.object({
  select: CharacterSelectSchema.optional(),
  include: CharacterIncludeSchema.optional(),
  data: z.union([ CharacterUpdateInputSchema,CharacterUncheckedUpdateInputSchema ]),
  where: CharacterWhereUniqueInputSchema,
}).strict() ;

export const CharacterUpdateManyArgsSchema: z.ZodType<Prisma.CharacterUpdateManyArgs> = z.object({
  data: z.union([ CharacterUpdateManyMutationInputSchema,CharacterUncheckedUpdateManyInputSchema ]),
  where: CharacterWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CharacterUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CharacterUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CharacterUpdateManyMutationInputSchema,CharacterUncheckedUpdateManyInputSchema ]),
  where: CharacterWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CharacterDeleteManyArgsSchema: z.ZodType<Prisma.CharacterDeleteManyArgs> = z.object({
  where: CharacterWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;