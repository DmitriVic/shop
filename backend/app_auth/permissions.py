from rest_framework import permissions


class IsAdminOrIsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # print(f'method={request.method} user={request.user}')
        if request.user.is_staff:
            return True
        # print('obj=', obj)
        return obj == request.user
