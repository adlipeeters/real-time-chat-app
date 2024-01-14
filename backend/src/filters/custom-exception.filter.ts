import { GraphQLError } from 'graphql';
import { Catch, BadRequestException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
@Catch(BadRequestException)
export class GraphQLErrorFilter implements GqlExceptionFilter {
    catch(exception: BadRequestException) {
        const response = exception.getResponse();
        if (typeof response === 'object') {
            throw new GraphQLError('Validation error', {
                extensions: { code: 'VALIDATION_ERROR', ...response }
            });
        } else {
            throw new GraphQLError('Validation error');
        }
    }
}