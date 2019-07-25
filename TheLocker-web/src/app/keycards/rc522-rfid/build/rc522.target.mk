# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := rc522
DEFS_Debug := \
	'-DNODE_GYP_MODULE_NAME=rc522' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DBUILDING_NODE_EXTENSION' \
	'-DDEBUG' \
	'-D_DEBUG' \
	'-DV8_ENABLE_CHECKS'

# Flags passed to all source files.
CFLAGS_Debug := \
	-fPIC \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-g \
	-O0

# Flags passed to only C files.
CFLAGS_C_Debug :=

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-fno-rtti \
	-fno-exceptions \
	-std=gnu++0x

INCS_Debug := \
	-I/root/.node-gyp/8.9.4/include/node \
	-I/root/.node-gyp/8.9.4/src \
	-I/root/.node-gyp/8.9.4/deps/uv/include \
	-I/root/.node-gyp/8.9.4/deps/v8/include

DEFS_Release := \
	'-DNODE_GYP_MODULE_NAME=rc522' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \
	-fPIC \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-O3 \
	-fno-omit-frame-pointer

# Flags passed to only C files.
CFLAGS_C_Release :=

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-fno-rtti \
	-fno-exceptions \
	-std=gnu++0x

INCS_Release := \
	-I/root/.node-gyp/8.9.4/include/node \
	-I/root/.node-gyp/8.9.4/src \
	-I/root/.node-gyp/8.9.4/deps/uv/include \
	-I/root/.node-gyp/8.9.4/deps/v8/include

OBJS := \
	$(obj).target/$(TARGET)/src/rc522.o \
	$(obj).target/$(TARGET)/src/rfid.o \
	$(obj).target/$(TARGET)/src/accessor.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-pthread \
	-rdynamic

LDFLAGS_Release := \
	-pthread \
	-rdynamic

LIBS := \
	-lbcm2835

$(obj).target/rc522.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(obj).target/rc522.node: LIBS := $(LIBS)
$(obj).target/rc522.node: TOOLSET := $(TOOLSET)
$(obj).target/rc522.node: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(obj).target/rc522.node
# Add target alias
.PHONY: rc522
rc522: $(builddir)/rc522.node

# Copy this to the executable output path.
$(builddir)/rc522.node: TOOLSET := $(TOOLSET)
$(builddir)/rc522.node: $(obj).target/rc522.node FORCE_DO_CMD
	$(call do_cmd,copy)

all_deps += $(builddir)/rc522.node
# Short alias for building this executable.
.PHONY: rc522.node
rc522.node: $(obj).target/rc522.node $(builddir)/rc522.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/rc522.node

